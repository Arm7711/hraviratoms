import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DisableIOSZoom } from './hooks/DisableIOSZoom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DisableIOSZoom />
    <App />
    <ToastContainer
      position="top-right"
      limit={2}
      autoClose={2200}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      style={{ zIndex: 999999 }}
    />
  </BrowserRouter>
);
