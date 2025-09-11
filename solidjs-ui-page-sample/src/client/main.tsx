import { render } from 'solid-js/web';
import App from './app';

const rootElement = document.getElementById('root');
if (rootElement) {
  render(() => <App />, rootElement);
}