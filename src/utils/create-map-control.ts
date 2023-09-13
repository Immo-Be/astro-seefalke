export const createAnimationControlButton = (map: google.maps.Map) => {
  const animationControlButton = document.createElement('button');
  // This is a style made globally available in the app
  // That way it can be used on the google maps

  // This class is specific to the animation button
  animationControlButton.classList.add('button-class');
  animationControlButton.id = 'animation-control-button';
  animationControlButton.textContent = 'Start Animation';
  animationControlButton.title = 'Click to recenter the map';
  animationControlButton.type = 'button';

  // Create the DIV to hold the control.
  const centerControlDiv = document.createElement('div');
  // Create the control.
  const centerControl = animationControlButton;
  // Append the control to the DIV.
  centerControlDiv.appendChild(centerControl);

  map.controls[google.maps.ControlPosition.LEFT_TOP].push(centerControlDiv);

  addElementToMap(
    animationControlButton,
    map,
    google.maps.ControlPosition.LEFT_TOP
  );

  return animationControlButton;
};

export const addElementToMap = (
  element: HTMLElement,
  map: google.maps.Map,
  position: google.maps.ControlPosition
) => {
  const centerControlDiv = document.createElement('div');
  centerControlDiv.style.minWidth = '300px';
  centerControlDiv.appendChild(element);
  map.controls[position].push(centerControlDiv);
};
