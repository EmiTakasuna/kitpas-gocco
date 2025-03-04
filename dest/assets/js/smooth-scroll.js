// ヘッダー情報
const header = document.querySelector(".fixed-header");
const headerHeight = header ? header.offsetHeight + 20 : 0;

// イージング関数（easeOutExpo）
function scrollToPos(position) {
  const startPos = window.scrollY;
  const distance = Math.min(
    position - startPos,
    document.documentElement.scrollHeight - window.innerHeight - startPos
  );
  const duration = 800; // スクロールにかかる時間（ミリ秒）

  let startTime;

  function easeOutExpo(t, b, c, d) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  }

  function animation(currentTime) {
    if (startTime === undefined) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const scrollPos = easeOutExpo(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, scrollPos);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, position);
    }
  }

  requestAnimationFrame(animation);
}

// 画像の強制読み込み
function loadImages() {
  const targets = document.querySelectorAll("[data-src]");
  for (const target of targets) {
    const dataSrc = target.getAttribute("data-src");
    const currentSrc = target.getAttribute("src");

    // data-src と src が異なる場合のみコピーする
    if (dataSrc !== currentSrc) {
      target.setAttribute("src", dataSrc);
    }
  }
}

// ページ内のスムーススクロール
for (const link of document.querySelectorAll('a[href*="#"]')) {
  link.addEventListener("click", (e) => {
    const hash = e.currentTarget.hash;
    const target = document.getElementById(hash.slice(1));

    // ページトップへ("#"と"#top"）
    if (!hash || hash === "#top") {
      e.preventDefault();
      scrollToPos(0);

      // アンカーへ
    } else if (target) {
      e.preventDefault();
      loadImages();
      const position =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;
      scrollToPos(position);

      // URLにハッシュを含める
      history.pushState(null, "", hash);
    }
  });
}

// 別ページ遷移後のスムーススクロール
const urlHash = window.location.hash;
if (urlHash) {
  const target = document.getElementById(urlHash.slice(1));
  if (target) {
    // ページトップから開始（ブラウザ差異を考慮して併用）
    history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);

    loadImages();
    window.addEventListener("load", () => {
      const position =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;
      scrollToPos(position);

      // ハッシュを再設定
      history.replaceState(null, "", window.location.pathname + urlHash);
    });
  }
}