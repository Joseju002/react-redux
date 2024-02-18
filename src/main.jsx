import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header.jsx'
import './bootstrap/css/bootstrap.min.css'
import './css/index1.css'
import store from './redux/store'
import { Provider } from 'react-redux';
import { ModoProvider } from './componentes/Global.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModoProvider>
        <Header />
      </ModoProvider>
    </Provider>
  </React.StrictMode>
)
