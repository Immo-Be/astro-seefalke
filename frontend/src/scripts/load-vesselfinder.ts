import initVesselFinder from './vesselfinder';

export const loadVesselFinder = () => {
  const element = document.getElementById('vesselfinder');

  if (!element) {
    console.warn('No element with the id of "vesselfinder" found');
    return;
  }

  const script1 = document.createElement('script');
  script1.type = 'text/javascript';
  script1.innerText =
    'var width = "100%";\nvar height = "200px";\nvar mmsi = 211796470;';

  // Add the script to the DOM
  element.appendChild(script1);

  // Init the VesselFinder widget
  initVesselFinder();
};
