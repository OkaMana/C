const clock = () => {
  // 現在の日時・時刻の情報を取得
  const d = new Date();
  
　d.toLocaleString( "ja-JP-u-ca-japanese" ,{ era : "long" });

  
};

// 1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);
