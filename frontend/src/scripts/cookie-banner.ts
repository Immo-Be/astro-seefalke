import createCookieBanner from './create-cookie-banner';

export enum Consent {
  accepted = 'accepted',
  declined = 'declined'
}

export const consentStorageItem = 'cookiesAcceptance';

export const setConsent = (value: Consent) => {
  localStorage.setItem(consentStorageItem, `${value}`);
};

export const hideBanner = () => {
  const banner = document.querySelector('.cookie-banner') as HTMLElement;

  if (banner) {
    banner.remove();
  }
};

export default (loadScripts: () => void) => {
  const acceptCookies = () => {
    setConsent(Consent.accepted);
    hideBanner();
    loadScripts();
  };

  const declineCookies = () => {
    setConsent(Consent.declined);
    hideBanner();
  };

  createCookieBanner(
    () => acceptCookies(),
    () => declineCookies()
  );
};
