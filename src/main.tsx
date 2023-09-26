import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

class ReactElement extends HTMLElement {
    connectedCallback() {
        const root = createRoot(this);
        root.render(<App />);
    }
}

customElements.define('react-element', ReactElement);
