import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.min.css';
import locale from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <ConfigProvider locale={locale}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </React.StrictMode>
  </HashRouter>
);
