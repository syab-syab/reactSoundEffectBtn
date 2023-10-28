import React, { useState } from 'react';
import './App.css';

function App() {
  type Sound = {
    id: number
    content: string
  }

  // 各フォルダの音声ファイル名
  // const voice1: Array<string> = ["笑い声", "応！", "ドンドンパフパフ", "歓声", 
  //                               "歓声(失敗時)", "おばけ", "悲鳴", "歓声と拍手", "黄色い悲鳴"];
  const voice1: Array<Sound> =
  [
    {id: 1, content:  "笑い声"},
    {id: 2, content: "応！"},
    {id: 3, content: "ドンドンパフパフ"},
    {id: 4, content: "歓声"},
    {id: 5, content: "歓声(失敗時)"},
    {id: 6, content: "おばけ"},
    {id: 7, content: "悲鳴"},
    {id: 8, content: "歓声と拍手"},
    {id: 9, content: "黄色い悲鳴"}
  ]

  // const voice2: Array<string>  = ["犬", "牛", "ウグイス", "オオカミ", "ゾウ", "ニワトリ",
  //                                 "ブタ", "ライオン", "猫",  "馬"];

  const voice2: Array<Sound> =
  [
    {id: 1, content: "犬"},
    {id: 2, content: "牛"},
    {id: 3, content: "ウグイス"},
    {id: 4, content: "オオカミ"},
    {id: 5, content: "ゾウ"},
    {id: 6, content: "ニワトリ"},
    {id: 7, content: "ブタ"},
    {id: 8, content: "ライオン"},
    {id: 9, content: "猫"},
    {id: 10, content: "馬"}
  ]

  // const se1: Array<string>  = ["カーッ", "ジャジャーン", "ビシッ(高)", "ピンポン1", "ピンポン2", "ピンポン3", "不正解", "突撃ラッパ", 
  //                             "ゴング(開始)", "ゴング(終了)", "整い(サウナ)", "ニュータイプ", "ビシッ",  "ピー音", "問題です"];

  const se1: Array<Sound> = 
  [
    {id: 1, content: "カーッ"},
    {id: 2, content: "ジャジャーン"},
    {id: 3, content: "ビシッ(高)"},
    {id: 4, content: "ピンポン1"},
    {id: 5, content: "ピンポン2"},
    {id: 6, content: "ピンポン3"},
    {id: 7, content: "不正解"},
    {id: 8, content: "突撃ラッパ"}, 
    {id: 9, content: "ゴング(開始)"},
    {id: 10, content: "ゴング(終了)"},
    {id: 11, content: "整い(サウナ)"},
    {id: 12, content: "ニュータイプ"},
    {id: 13, content: "ビシッ"},
    {id: 14, content: "ピー音"},
    {id: 15, content: "問題です"}
  ];

  // const se2: Array<string>  = ["エアーホーン", "カキーン", "チリン", "デン！", "ドラ", "ドーン", "拍手", "爆発1", "爆発2", "鳩時計",
  //                             "カウントダウン", "シャキーン", "テロン♪", "ドキドキ", "ドラムロール", "バーン", "ファンファーレ",  "衝撃",  "パフ",];

  const se2: Array<Sound> =
  [
    {id: 1, content: "エアーホーン"},
    {id: 2, content: "カキーン"},
    {id: 3, content: "チリン"},
    {id: 4, content: "デン！"},
    {id: 5, content: "ドラ"},
    {id: 6, content: "ドーン"},
    {id: 7, content: "拍手"},
    {id: 8, content: "爆発1"},
    {id: 9, content: "爆発2"},
    {id: 10, content: "鳩時計"},
    {id: 11, content: "カウントダウン"},
    {id: 12, content: "シャキーン"},
    {id: 13, content: "テロン♪"},
    {id: 14, content: "ドキドキ"},
    {id: 15, content: "ドラムロール"},
    {id: 16, content: "バーン"},
    {id: 17, content: "ファンファーレ"},
    {id: 18, content: "衝撃"},
    {id: 19, content: "パフ"},
  ];

  // const se3: Array<string>  = ["ガブッ", "ボヨン", "ポカン", "縮む", "伸びる", "切り替え",];

  const se3: Array<Sound> =
  [
    {id: 1, content: "ガブッ"},
    {id: 2, content: "ボヨン"},
    {id: 3, content: "ポカン"},
    {id: 4, content: "縮む"},
    {id: 5, content: "伸びる"},
    {id: 6, content: "切り替え"},
  ];

  // const danger: Array<string>  = ["おなら1", "おなら2", "脱糞1", "脱糞2"];

  const danger: Array<Sound>  =
  [
    {id: 1, content: "おなら1"},
    {id: 2, content: "おなら2"},
    {id: 3, content: "脱糞1"},
    {id: 4, content: "脱糞2"}
  ];

  // ローカルに保存してあるキーの有無
  const localGenre = (): string => {
    const tmp = localStorage.getItem("local-selected-genre")
    if (!tmp) {
      console.log(tmp)
      return "0"
    } else {
      console.log(tmp)
      return tmp
    }
  }

  // 選ばれた効果音のジャンル
  const [genre, setGenre] = useState<string>(localGenre)

  // セレクトタグの変更に反応
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    localStorage.setItem("local-selected-genre", e.target.value)
    setGenre(e.target.value)
    
  }

  // 選ばれたジャンルによって表示するボタンを変更する
  const selectedSounds = (val: string): Array<any> => {
    // 配列を返す[フォルダ名, 再生ファイル名の配列
    switch (val) {
      case "0":
        return ["voice1", voice1]
      case "1":
        return ["voice2", voice2]
      case "2":
        return ["se1", se1]
      case "3":
        return ["se2", se2]
      case "4":
        return ["se3", se3]
      case "5":
        return ["danger", danger]
      default:
        return ["voice1", voice1]
    }
  }

  // フォルダとボタンの配列
  const sounds: Array<any> = selectedSounds(genre)

  // 音声ファイルのフォルダ
  const soundDir = (val: string): string =>  `../public/sound/${sounds[0]}/${val}.mp3`

  // 表示するボタンの配列
  const buttons: Array<Sound> = sounds[1]


  // クリックしたら音を再生+activeクラスを付与
  const handleClick = (e: Sound): void => {
    // クリックしたボタンのidかcontentが欲しい
    console.log(e.content)
    console.log(soundDir(e.content))
  }


  return (
    <div className="App">
      <header className="header">
        <h1 className="title">効果音ボタン</h1>
      </header>

      <main className="container">
        <select value={genre} id="sound-select" className="sound-select" onChange={handleChange}>
          <option value="0">声系1</option>
          <option value="1">声系2</option>
          <option value="2">SE1</option>
          <option value="3">SE2</option>
          <option value="4">SE3</option>
          <option value="5">悪用禁止!!</option>
        </select>
        <div className="sound-effect-button-space" id="sound-effect-button-space">
          {
            buttons.map(s => {
              return (
                <div key={s.id} className="sound-effect-button" onClick={() => handleClick(s)}>
                  {s.content}
                </div>
              )
            })
          }
        </div>
        <div className="sound-effect-button">
          test
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
