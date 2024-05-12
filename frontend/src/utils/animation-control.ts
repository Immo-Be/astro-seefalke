import type {AnimationObject} from '../types/google-maps-custom-types';
import animateIcon from './animate-icon';

const ICONSPEED = 1; // Set speed of the icon animation

export const updateProgressBar = (
  progressInput: HTMLInputElement,
  progressBar: HTMLDivElement,
  animations: AnimationObject
) => {
  progressBar.style.setProperty('--percentage', animations.icon.value + '%');
  progressInput.value = `${animations.icon.value}`;
};

export const startAnimation = (
  animations: AnimationObject,
  progressInput: HTMLInputElement,
  progressBar: HTMLDivElement,
  animationControlButton: HTMLButtonElement,
  hafenRundFahrtPath: google.maps.Polyline
) => {
  animations.hasStarted = true;
  animations.isPaused = false;
  animationControlButton.innerHTML = 'Pause Animation';

  animations.interval = setInterval(() => {
    animateIcon(hafenRundFahrtPath, animations.icon.value);
    // Animate Polyline as well?
    animations.icon.value = (animations.icon.value + ICONSPEED) % 100;

    if (animations.icon.value === 0) {
      clearInterval(animations.interval);
      animations.hasStarted = false;
      animationControlButton.innerHTML = 'Re-start';
    }

    updateProgressBar(progressInput, progressBar, animations);
  }, 40);
};

export const pauseAnimation = (
  animations: AnimationObject,
  animationControlButton: HTMLButtonElement
) => {
  window.clearInterval(animations.interval);

  animations.isPaused = true;
  animationControlButton!.innerHTML = 'Resume Animation';
};
