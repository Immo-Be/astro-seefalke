export const createSlider = () => {
  // Create the outer div element with class and data attribute
  const progressBarDiv = document.createElement('div');
  progressBarDiv.className = 'progress-bar';
  const tripCoords = 'YourTripCoords'; // Replace with actual data
  progressBarDiv.setAttribute('data-message', tripCoords);

  // Create the input element
  const sliderInput = document.createElement('input');
  sliderInput.className = 'slider';
  sliderInput.type = 'range';
  sliderInput.min = '1';
  sliderInput.max = '100';
  sliderInput.value = '0';
  sliderInput.id = 'myRange';

  // Append the input element to the outer div
  progressBarDiv.appendChild(sliderInput);

  return progressBarDiv;

  // Append the outer div to the document body or any other desired parent element
};
