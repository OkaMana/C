const clock = () => {
  // 現在の日時・時刻の情報を取得
  const d = new Date();
  
　let year = d.toLocaleString( "ja-JP-u-ca-japanese" ,{ era : "long" });

  // 日付・時刻の文字列を作成
  let today = `今日は${year}だよ〜`;

  // 文字列を出力
  document.querySelector(".clock-date").innerText = today;
  
};

// 1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);
