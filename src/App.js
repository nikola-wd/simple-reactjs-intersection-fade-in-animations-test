import React from 'react';
import './style.css';
import Observable from './components/Observable';

export default function App() {
  return (
    <div>
      <Observable mode="btm" inOut>
        <h1>Hello StackBlitz!</h1>
      </Observable>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <Observable mode="btm" inOut>
        <p>animated: Start editing to see some magic happen :)</p>
      </Observable>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <Observable mode="btm" inOut>
        <p>animated: Start editing to see some magic happen :)</p>
      </Observable>
      <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <Observable mode="custom" inOut treshold={0.05}>
        <p>custom: Start editing to see some magic happen :)</p>
      </Observable>
      <p>Start editing to see some magic happen :)</p>
      <Observable mode="left" inOut treshold={0.05}>
        <p style={{ height: '150vh', boxShadow: '0 0 0 1px red' }}>
          animated: Start editing to see some magic happen :)
        </p>
      </Observable>
      <p>Start editing to see some magic happen :)</p>
      <Observable mode="top" inOut>
        <p>top: Start editing to see some magic happen :)</p>
      </Observable>
      <Observable mode="left" inOut trDelay="0.5s" trOffset="100px">
        <p>left: Start editing to see some magic happen :)</p>
      </Observable>
      <Observable mode="right" inOut>
        <p>right: Start editing to see some magic happen :)</p>
      </Observable>
    </div>
  );
}
