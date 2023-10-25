import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">効果音ボタン</h1>
      </header>

      <main className="container">
        <select name="" id="sound-select" className="sound-select">
          <option value="" selected>選択してください。</option>
          <option value="0">声系1</option>
          <option value="1">声系2</option>
          <option value="2">SE1</option>
          <option value="3">SE2</option>
          <option value="4">SE3</option>
          <option value="5">悪用禁止!!</option>
        </select>
        <div className="sound-effect-button-space" id="sound-effect-button-space">
          ボタン表示スペース
        </div>
      </main>

      <footer className="footer">
        {/* <div className="twitter-share-btn">
          <a href="http://twitter.com/share?url=https://syab-syab.github.io/soundEffectBtn/&text=効果音ボタン" target="_blank"><i className="fa-brands fa-twitter"></i><span>Twitter</span></a>
        </div> */}
        <span className="copy">
          © 効果音ボタン
        </span>
      </footer>
    </div>
  );
}

export default App;
