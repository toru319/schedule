window.onload = function() {
    const monthElement = document.getElementById('month');
    const dateElement = document.getElementById('date');
    const dayElement = document.getElementById('day');
    const dateButton = document.getElementById('dateButton');
    const calendarTop = document.querySelector('.calendar-top');

    const today = new Date();

    // 年号を取得して表示
    const year = today.getFullYear();
    calendarTop.innerText = `${year}年`;

    monthElement.innerText = today.toLocaleString('default', { month: 'long' });
    dateElement.innerText = today.getDate();
    dayElement.innerText = today.toLocaleString('default', { weekday: 'long' });

    // 月と日にちの組み合わせに応じた文字列
    const dynamicStrings = {
        '8-26': '練習あるよ…\n昼休み→校庭',
        '8-28': '練習あるよ…\n昼休み→校庭\n放課後→校庭',
        '8-29': '練習あるよ…\n昼休み→総合教室',
        '9-2': '練習あるよ…\n放課後→総合教室',
        '9-4': '練習あるよ…\n放課後→校庭',
        '9-5': '練習あるよ…\n昼休み→総合教室',
        '9-9': '練習あるよ…\n昼休み→校庭\n放課後→校庭',
        '9-12': '練習あるよ…\n放課後→校庭',
        '9-30': '練習あるよ…\n昼休み→体育館',
        // 他の月日組み合わせも追加可能
    };

    let isDateVisible = true;

    dateButton.onclick = function() {
        const monthDateKey = `${today.getMonth() + 1}-${today.getDate()}`;
        if (isDateVisible) {
            monthElement.innerText = '';
            dateElement.innerText = dynamicStrings[monthDateKey] || '練習なし！\n先輩とデートする日♡';
            dateElement.classList.add('small-text'); // 小さい文字サイズを適用
            dayElement.innerText = '';
        } else {
            monthElement.innerText = today.toLocaleString('default', { month: 'long' });
            dateElement.innerText = today.getDate();
            dateElement.classList.remove('small-text'); // 通常の文字サイズに戻す
            dayElement.innerText = today.toLocaleString('default', { weekday: 'long' });
        }
        isDateVisible = !isDateVisible;
    };
};