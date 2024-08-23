// 名前を取得して保存し、結果ページに遷移する関数
function showResult() {
    const name = document.getElementById('nameInput').value;
    
    if (name) {
        localStorage.setItem('name', name);  // 名前を保存
        window.location.href = 'result.html';  // 結果ページに遷移
    } else {
        alert("名前を入力してください");
    }
}
window.onload = function() {
    const name = localStorage.getItem('name');  // 保存された名前を取得
    
    if (name) {
        const results = [
            { outcome: "P 賞", color: "green", gif: "daikichi.gif" },
            { outcome: "O 賞", color: "blue", gif: "chukichi.gif" },
            { outcome: "L 賞", color: "orange", gif: "shokichi.gif" },
            { outcome: "K 賞", color: "purple", gif: "suekichi.gif" },
            
        ];
        
        // ランダムに結果を選ぶ
        const randomResult = results[Math.floor(Math.random() * results.length)];
        
        // 「〇〇さんおめでとうございます」を黒で表示
        document.getElementById('resultMessage').innerText = `${name}さん!
        おめでとうございます！`;
        document.getElementById('resultMessage').style.color = "black";
        
        // 結果部分を設定し、色を変更
        const resultOutcomeElement = document.getElementById('resultOutcome');
        resultOutcomeElement.innerText = randomResult.outcome;
        resultOutcomeElement.style.color = randomResult.color;
        
        // GIFを表示
        const resultGifElement = document.getElementById('resultGif');
        resultGifElement.src = randomResult.gif;  // 結果に対応するGIFを設定
        resultGifElement.style.display = 'block';  // GIFを表示
    }
};




// 戻るボタンをクリックしたときに最初の画面に戻る
function goBack() {
    window.location.href = 'index.html';
}
