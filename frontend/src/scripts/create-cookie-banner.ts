export default (accept: () => void, deny: () => void) => {
  // Create a div element for the cookie banner
  const cookieBanner = document.createElement('div');
  cookieBanner.className = 'cookie-banner';
  document.body.appendChild(cookieBanner);

  // Create an SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 122.88 122.25');
  svg.setAttribute('y', '0px');
  svg.setAttribute('x', '0px');
  svg.setAttribute('id', 'cookieSvg');
  svg.setAttribute('version', '1.1');
  cookieBanner.appendChild(svg);

  // Create a path element within the SVG
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    'M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z M59.28,57.86c2.77,0,5.01,2.24,5.01,5.01c0,2.77-2.24,5.01-5.01,5.01 c-2.77,0-5.01-2.24-5.01-5.01C54.27,60.1,56.52,57.86,59.28,57.86L59.28,57.86z M37.56,78.49c3.37,0,6.11,2.73,6.11,6.11 s-2.73,6.11-6.11,6.11s-6.11-2.73-6.11-6.11S34.18,78.49,37.56,78.49L37.56,78.49z M50.72,31.75c2.65,0,4.79,2.14,4.79,4.79 c0,2.65-2.14,4.79-4.79,4.79c-2.65,0-4.79-2.14-4.79-4.79C45.93,33.89,48.08,31.75,50.72,31.75L50.72,31.75z M119.3,32.4 c1.98,0,3.58,1.6,3.58,3.58c0,1.98-1.6,3.58-3.58,3.58s-3.58-1.6-3.58-3.58C115.71,34.01,117.32,32.4,119.3,32.4L119.3,32.4z M93.62,22.91c2.98,0,5.39,2.41,5.39,5.39c0,2.98-2.41,5.39-5.39,5.39c-2.98,0-5.39-2.41-5.39-5.39 C88.23,25.33,90.64,22.91,93.62,22.91L93.62,22.91z M97.79,0.59c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78C92.02,3.17,94.6,0.59,97.79,0.59L97.79,0.59z M76.73,80.63c4.43,0,8.03,3.59,8.03,8.03 c0,4.43-3.59,8.03-8.03,8.03s-8.03-3.59-8.03-8.03C68.7,84.22,72.29,80.63,76.73,80.63L76.73,80.63z M31.91,46.78 c4.8,0,8.69,3.89,8.69,8.69c0,4.8-3.89,8.69-8.69,8.69s-8.69-3.89-8.69-8.69C23.22,50.68,27.11,46.78,31.91,46.78L31.91,46.78z M107.13,60.74c-3.39-0.91-6.35-3.14-8.95-6.48c-5.78,1.52-11.16,1.41-15.76-0.02c-3.37-1.05-6.32-2.81-8.71-5.18 c-2.39-2.37-4.21-5.32-5.32-8.75c-1.51-4.66-1.69-10.2-0.18-16.32c-3.1-1.8-5.25-4.53-6.42-7.88c-1.06-3.05-1.28-6.59-0.61-10.35 C47.27,5.95,34.3,11.36,24.41,20.18C13.74,29.69,6.66,43.15,5.84,58.29l0,0.05v0h0l-0.01,0.13v0C5.07,73.72,10.55,87.82,20.02,98.3 c9.44,10.44,22.84,17.29,38,18.1l0.05,0h0v0l0.13,0.01h0c15.24,0.77,29.35-4.71,39.83-14.19c10.44-9.44,17.29-22.84,18.1-38l0-0.05 v0h0l0.01-0.13v0c0.07-1.34,0.09-2.64,0.06-3.91C112.98,61.34,109.96,61.51,107.13,60.74L107.13,60.74z M116.15,64.04L116.15,64.04 L116.15,64.04L116.15,64.04z M58.21,116.42L58.21,116.42L58.21,116.42L58.21,116.42z'
  ); // Add the path data here
  svg.appendChild(path);

  // Create a paragraph element for the cookie banner heading
  const heading = document.createElement('p');
  heading.className = 'cookieHeading';
  heading.textContent = 'Diese Seite verwendet Cookies';
  cookieBanner.appendChild(heading);

  // Create a paragraph element for the cookie banner description
  const description = document.createElement('p');
  description.className = 'cookieDescription';
  description.innerHTML =
    'Wir benutzen Cokies, um dir die bestmögliche Erfahrung zu liefern<br /><a href="/impressum">Lies die Datenschutzhinweise</a>.';
  cookieBanner.appendChild(description);

  // Create a div element for the button container
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttonContainer';
  cookieBanner.appendChild(buttonContainer);

  // Create an "Erlauben" button
  const acceptButton = document.createElement('button');
  acceptButton.className = 'button-class';
  acceptButton.id = 'accept-cookies';
  acceptButton.textContent = 'Erlauben';
  acceptButton.addEventListener('click', () => {
    accept();
  });
  buttonContainer.appendChild(acceptButton);

  // Create an "Ablehnen" button
  const declineButton = document.createElement('button');
  declineButton.className = 'button-class';
  declineButton.id = 'decline-cookies';
  declineButton.textContent = 'Ablehnen';
  declineButton.addEventListener('click', () => {
    deny();
  });
  buttonContainer.appendChild(declineButton);

  // Apply inline styles for the CSS properties
  cookieBanner.style.minHeight = '300px';
  cookieBanner.style.width = '100%';
  cookieBanner.style.backgroundColor = 'rgb(255, 255, 255)';
  cookieBanner.style.borderRadius = '8px';
  cookieBanner.style.display = 'flex';
  cookieBanner.style.flexDirection = 'column';
  cookieBanner.style.alignItems = 'center';
  cookieBanner.style.justifyContent = 'center';
  cookieBanner.style.padding = '20px 30px';
  cookieBanner.style.gap = '13px';
  cookieBanner.style.position = 'fixed';
  cookieBanner.style.overflow = 'hidden';
  cookieBanner.style.boxShadow = '2px 2px 20px rgba(0, 0, 0, 0.062)';
  cookieBanner.style.zIndex = '1000';
  cookieBanner.style.bottom = '0';

  // Apply inline styles for the SVG width
  svg.style.width = '50px';

  // Apply inline styles for the path fill
  path.style.fill = 'rgb(97, 81, 81)';

  // Apply inline styles for the heading
  heading.style.fontSize = '1.2em';
  heading.style.fontWeight = '800';
  heading.style.color = 'rgb(26, 26, 26)';

  // Apply inline styles for the description
  description.style.textAlign = 'center';
  description.style.fontSize = '0.7em';

  // Apply inline styles for the link within the description
  const link = description.querySelector('a');
  link!.style.color = 'rgb(59, 130, 246)';

  // Apply inline styles for the button container
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '20px';
  buttonContainer.style.flexDirection = 'row';

  // Apply inline styles for the "Erlauben" button
  // acceptButton.style.width = '80px';
  // acceptButton.style.height = '30px';
  // acceptButton.style.backgroundColor = '#7b57ff';
  // acceptButton.style.transitionDuration = '0.2s';
  // acceptButton.style.border = 'none';
  // acceptButton.style.color = 'rgb(241, 241, 241)';
  // acceptButton.style.cursor = 'pointer';
  // acceptButton.style.fontWeight = '600';
  // acceptButton.style.borderRadius = '20px';

  // // Apply inline styles for the "Ablehnen" button
  // declineButton.style.width = '80px';
  // declineButton.style.height = '30px';
  // declineButton.style.backgroundColor = '#dadada';
  // declineButton.style.transitionDuration = '0.2s';
  // declineButton.style.color = 'rgb(46, 46, 46)';
  // declineButton.style.border = 'none';
  // declineButton.style.fontWeight = '600';
  // declineButton.style.borderRadius = '20px';

  // Add hover styles for the buttons
  acceptButton.addEventListener('mouseover', () => {
    acceptButton.style.backgroundColor = '#9173ff';
    acceptButton.style.boxShadow =
      '0 10px 15px -3px #977ef3, 0 4px 6px -2px #977ef3';
  });

  acceptButton.addEventListener('mouseout', () => {
    acceptButton.style.backgroundColor = '#7b57ff';
    acceptButton.style.boxShadow = '';
  });

  declineButton.addEventListener('mouseover', () => {
    declineButton.style.backgroundColor = '#ebebeb';
    declineButton.style.boxShadow =
      '0 10px 15px -3px #bebdbd, 0 4px 6px -2px #bebdbd';
  });

  declineButton.addEventListener('mouseout', () => {
    declineButton.style.backgroundColor = '#dadada';
    declineButton.style.boxShadow = '';
  });
};
