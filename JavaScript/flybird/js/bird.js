let bird = {
    flyTimer: null,
    wingTimer: null,
    div: document.createElement('div'), //<div></div>
    showBird: function(parentObj) {
        this.div.style.width = '40px';
        this.div.style.height = '28px';
        this.div.style.backgroundImage = 'url(img/bird0.png)';
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.position = 'absolute';
        this.div.style.left = '50px';
        this.div.style.top = '200px';
        this.div.style.zIndex = '1';
        parentObj.appendChild(this.div);
    },
    fallSpeed: 0, //小鸟下落的速度
    flyBird: function() { //小鸟飞翔下落的函数
        bird.flyTimer = setInterval(fly, 60);

        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px';
            if (bird.div.offsetTop >= 395) { //掉到地上
                fallSpeed = 0;
                clearInterval(bird.flyTimer);
                clearInterval(bird.wingTimer);
            }
            if (bird.div.offsetTop < 0) { //控制小鸟不飞出界
                bird.div.style.top = '0px';
                bird.fallSpeed = 2;
            }
            if (bird.fallSpeed > 12) { //控制小鸟下落速度最大为12
                bird.fallSpeed = 12;
            }
        }
    },
    wingWave: function() { //小鸟扇动翅膀
        let down = ['url(./img/down_bird0.png)', 'url(./img/down_bird1.png)'];
        let up = ['url(./img/up_bird0.png)', 'url(./img/up_bird1.png)'];

        let i = 0,
            j = 0;
        bird.wingTimer = setInterval(wing, 120)

        function wing() {
            if (bird.fallSpeed > 0) {
                bird.div.style.backgroundImage = down[i++];
                if (i === 2) {
                    i = 0;
                }
            }

            if (bird.fallSpeed < 0) {
                bird.div.style.backgroundImage = up[j++]
                if (j === 2) { j = 0 }
            }
        }
    },
}