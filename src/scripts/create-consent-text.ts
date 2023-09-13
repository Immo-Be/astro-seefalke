import {setConsent, hideBanner} from './cookie-banner';
import {loadThirdPartScripts} from './load-third-party-scripts';

interface Props {
  element: HTMLElement;
}

export const createConsentText = (props: Props) => {
  const {element} = props;

  const button = document.createElement('button');
  button.textContent = 'Erlaube Cookies';
  button.className = 'button-class';
  button.addEventListener('click', () => {
    loadThirdPartScripts();
    setConsent('true');
    hideBanner();
  });
  element.innerHTML =
    '<p>Diese Karte wird aufgrund deiner Cookie Einstellung nicht geladen</p><p>Erlaube das Laden von Cookies, um diese interaktive Map zu nutzen</p>';
  element.appendChild(button);
  element.style.padding = '20px';
  element.style.lineHeight = '2em';
  element.style.backgroundColor = '#fff';
  element.style.border = '1px solid #ccc';
};
