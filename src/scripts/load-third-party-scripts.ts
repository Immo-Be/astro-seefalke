import {initMap} from './init-map';
import {loadVesselFinder} from './load-vesselfinder';
import {loadGoogleMaps} from './google-map';

export const loadThirdPartScripts = () => {
  loadGoogleMaps({
    // key: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,
    key: 'AIzaSyCx6NiDPw3rDhOGGRMtbX8SCaKmEwqWTB0',
    v: 'weekly'
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
  initMap();
  loadVesselFinder();
};
