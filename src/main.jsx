import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper
import store  from './store/store.js';
import App from './App.jsx'
import { Provider } from 'react-redux'; // Add this import
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
          <App />
</Provider>
  </StrictMode>
)
