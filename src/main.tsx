import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import SelectLanguage from './context/Language/index.tsx';

createRoot(document.getElementById('root')!).render(
  <SelectLanguage>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </SelectLanguage>
);
