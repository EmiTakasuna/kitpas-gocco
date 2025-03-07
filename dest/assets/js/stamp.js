var imagesList = [];  // 表示された画像を管理する配列
var maxImages = 8;  // 画像の最大数
var isRemoveMode = false;  // 削除モードかどうかを判定するフラグ
// 画像を表示する関数
function moveImg(event) {
    if (isRemoveMode) {
        return;  // 削除モードなら画像を表示しない
    }

    // ランダムに選ばれる画像のリスト、画像のパスが必要
    var images = ["assets/images/icon_apple.svg", "assets/images/icon_bat.svg", "assets/images/icon_car.svg","assets/images/icon_cherry.svg","assets/images/icon_heart.svg","assets/images/icon_sunflower.svg","assets/images/icon_snow.svg"];
    var randomIndex = Math.floor(Math.random() * images.length); // ランダムに画像を選択

    // 新しいimg要素を作成
    var newImg = document.createElement("img");
    newImg.src = images[randomIndex];  // ランダムに選ばれた画像をセット
    newImg.style.position = "absolute"; // 絶対位置にする

    // 画像に「stamp_img」クラスを追加
    newImg.classList.add("stamp_img");

    // 最大サイズを指定（例: 100px x 100px）
    var maxWidth = 20;
    var maxHeight = 20;

    // 画像がロードされてからサイズ調整と位置設定を行う
    newImg.onload = function() {
        // 画像の実際のサイズを取得
        var imgWidth = newImg.width;
        var imgHeight = newImg.height;

        // 比率を保ったまま最大サイズに合わせる
        var ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);

        // サイズを調整
        newImg.width = imgWidth * ratio;
        newImg.height = imgHeight * ratio;

        // 画面幅に応じたクリック位置を取得して、画像を配置
        var adjustedX = (event.pageX / window.innerWidth) * 100;  // 画面幅に対するクリック位置（%）
        var adjustedY = (event.pageY / window.innerHeight) * 100;  // 画面高さに対するクリック位置（%）

        // 画像を配置する位置を計算（画像が画面を超えないように調整）
        var left = (adjustedX / 100) * window.innerWidth - newImg.width / 2;
        var top = (adjustedY / 100) * window.innerHeight - newImg.height / 2;

        // 画像が画面外に出ないように調整
        left = Math.max(0, Math.min(left, window.innerWidth - newImg.width));
        top = Math.max(0, Math.min(top, window.innerHeight - newImg.height));

        // 画像の位置を設定
        newImg.style.left = `${left}px`;
        newImg.style.top = `${top}px`;

        // 画像をbodyに追加
        document.body.appendChild(newImg);

        // 画像をimagesListに追加
        imagesList.push(newImg);

        // 画像数が最大数を超えた場合、最も古い画像を削除
        if (imagesList.length > maxImages) {
            var firstImg = imagesList.shift();  // 最初の画像を削除
            firstImg.remove();  // 画像をDOMから削除
        }
    }
}
// すべての画像を削除する関数
function removeAllImages() {
    // 画像を削除
    imagesList.forEach(function(img) {
        img.remove();  // 画像をDOMから削除
    });
    imagesList = [];  // 配列をリセット

    // 画像表示を再開できるようにする
    alert("すべての画像が削除されました。これ以降のクリックで画像は表示されます。");
    isRemoveMode = false;  // 削除モードを無効にして、画像の表示を再開
}

// 画面サイズ変更時の位置調整
window.onresize = function() {
    imagesList.forEach(function(img) {
        // 画面幅が変わったときに画像位置を再計算
        var adjustedX = (parseFloat(img.style.left) / window.innerWidth) * 100;
        var adjustedY = (parseFloat(img.style.top) / window.innerHeight) * 100;

        img.style.left = `calc(${adjustedX}% - ${img.width / 2}px)`;
        img.style.top = `calc(${adjustedY}% - ${img.height / 2}px)`;
    });
};

// ドキュメント全体でクリックイベントをリッスン
window.document.onclick = function(event) {
    // クリックした場所がボタンでない場合、画像を表示する
    if (event.target.tagName !== "BUTTON") {
        moveImg(event);  // ボタン以外でクリックした場合に画像を表示
    }
}
