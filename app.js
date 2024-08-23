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
    let results = [];
    const initialResults = [];

    // 各賞を15回ずつ配列に追加
    for (let i = 0; i < 15; i++) {
        initialResults.push({ outcome: "P 賞", color: "#FFD700" });  // ゴールド
        initialResults.push({ outcome: "O 賞", color: "#C0C0C0" });  // シルバー
        initialResults.push({ outcome: "L 賞", color: "#CD7F32" });  // ブロンズ
        initialResults.push({ outcome: "K 賞", color: "#00BFFF" });  // ディープスカイブルー
    }

    // 結果配列の初期化とシャッフル
    function resetResults() {
        results = [...initialResults];  // initialResultsをコピーしてresultsに設定
        shuffleArray(results);  // 配列をランダムにシャッフル
    }

    resetResults();  // 最初に一度リセットする

    // 配列をランダムにシャッフル
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function showResult() {
        const name = document.getElementById('nameInput').value;

        // 結果を配列から順番に取得
        const randomResult = results.pop();  // 最後の要素を取り出す

        // 結果の表示
        const resultMessage = `${name}さんおめでとうございます！`;
        document.getElementById('resultMessage').innerText = resultMessage;
        document.getElementById('resultOutcome').innerText = randomResult.outcome;
        document.getElementById('resultOutcome').style.color = randomResult.color;

        // 最初の画面を非表示にして、結果画面を表示
        document.querySelector('.container').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';

        // 結果がなくなったら再度リセット
        if (results.length === 0) {
            resetResults();  // 結果が尽きたらリセット
        }
    }

    // リセットボタンの動作
    function resetApp() {
        resetResults();  // 全ての賞が15回ずつの状態に戻す
        alert("リセットされました！");
    }

    // 最初の画面に戻る関数
    function goBack() {
        document.getElementById('resultContainer').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }

    // ボタンのイベントリスナーを設定
    document.querySelector('button').onclick = drawOmikuji;
    document.getElementById('resetButton').onclick = resetApp;  // リセットボタンの動作を設定
};
