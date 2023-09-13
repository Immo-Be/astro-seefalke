import createCookieBanner from './create-cookie-banner';

export const setConsent = (value: 'true' | 'false') => {
  localStorage.setItem('cookiesAccepted', `${value}`);
};

export const hideBanner = () => {
  const banner = document.querySelector('.cookie-banner') as HTMLElement;

  if (banner) {
    banner.remove();
  }
};

export default (loadScripts: () => void) => {
  const acceptCookies = () => {
    setConsent('true');
    hideBanner();
    loadScripts();
  };

  const declineCookies = () => {
    setConsent('false');
    hideBanner();
  };

  createCookieBanner(
    () => acceptCookies(),
    () => declineCookies()
  );
};
