import {mapOptions} from '../constants/map-options';
import type {AnimationObject} from '../types/google-maps-custom-types';

import animateIcon from '../utils/animate-icon';
import {
  updateProgressBar,
  startAnimation,
  pauseAnimation
} from '../utils/animation-control';
import {
  createAnimationControlButton,
  addElementToMap
} from '../utils/create-map-control';
import {createPolyline} from '../utils/create-polyline';
import {createSlider} from '../utils/create-slider';

let map: google.maps.Map | null = null;

export async function initMap(): Promise<void> {
  // Check if the google object is available
  if (!(typeof google === 'object')) {
    return;
  }

  const progressBar: HTMLDivElement | null = createSlider();

  const progressInput: HTMLInputElement | null =
    progressBar.querySelector('.slider');

  // Passing data from the frontmatter to a client script is not possible
  // So we need to pass it through the DOM

  const mapContainter = document.getElementById('map');

  let tripCoords: Array<{lat: number; lng: number}> = [];
  if (mapContainter instanceof HTMLElement) {
    const message = mapContainter.getAttribute('data-message');
    tripCoords = message ? JSON.parse(message) : [];
  }

  const {Map, Polyline} = (await google.maps.importLibrary(
    'maps'
  )) as google.maps.MapsLibrary;

  const {LatLngBounds} = (await google.maps.importLibrary(
    'core'
  )) as google.maps.CoreLibrary;

  let bounds = new LatLngBounds();

  if (!mapContainter) {
    return;
  }

  // Prevent click events on the map from propagating from the parent element
  mapContainter.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    event.stopPropagation(); // Stop the event from propagating further
  });

  map = new Map(
    mapContainter,

    {...mapOptions, center: bounds.getCenter()}
  );

  //make an array of maps coordinates for the bounds
  for (let i = 0; i < tripCoords.length; i++) {
    const pos = new google.maps.LatLng(tripCoords[i].lat, tripCoords[i].lng);
    bounds.extend(pos);
  }

  map.fitBounds(bounds);

  const animations: AnimationObject = {
    isPaused: false,
    hasStarted: false,
    interval: 0,
    icon: {
      value: 0,
      intervalId: 0
    }
  };

  if (!map) {
    return;
  }

  const tripCoordsPath = createPolyline(tripCoords, Polyline);

  // Select elements from the DOM
  const animationControlButton = createAnimationControlButton(map);

  addElementToMap(
    progressBar as HTMLElement,
    map,
    google.maps.ControlPosition.BOTTOM_CENTER
  );

  if (!animationControlButton || !progressInput || !progressBar) {
    throw new Error(
      'Could not find animation control button or progress input or progress bar'
    );
  }

  tripCoordsPath.setMap(map);

  progressBar.addEventListener('input', (event: Event) => {
    if (event === null || event.target === null) {
      return;
    }
    animations.icon.value = parseInt((event.target as HTMLInputElement).value);
    updateProgressBar(progressInput, progressBar, animations);
    animateIcon(tripCoordsPath, animations.icon.value);
  });

  animationControlButton.addEventListener('click', () => {
    if (!animations.hasStarted || animations.isPaused) {
      startAnimation(
        animations,
        progressInput,
        progressBar,
        animationControlButton,
        tripCoordsPath
      );
    } else {
      pauseAnimation(animations, animationControlButton);
    }
  });
}
