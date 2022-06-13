import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.min.css'
import locale from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider  locale={locale}>
    <App />
    </ConfigProvider>
 
  </React.StrictMode>
);


