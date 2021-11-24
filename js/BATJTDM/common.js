const btn = document.getElementById('modeBtn');
btn.addEventListener('click', (e) => {
    const body = document.body;
    console.log(e, '------------');
    //以下代码，有哪些可以分离出去
    if (e.target.innerHTML === '白天') {
        //职责分离点
        body.className = "night";
        // body.style.backgroundColor = 'black';
        // body.style.color = 'white';
        e.target.innerHTML = '夜晚';
    } else {
        // body.style.backgroundColor = 'white';
        // body.style.color = 'black';
        e.target.innerHTML = '白天';
        body.className = "light";
    }
})