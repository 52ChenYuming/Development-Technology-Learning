var data = [
    { value: '周杰伦听妈妈的话，好好听！', time: 5, color: 'red', speed: 1, fontSize: 22 },
    { value: '快快长大吧，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30 },
    { value: '听妈妈的话，晚点再恋爱吧', time: 6 },
    { value: '快快长大吧', time: 20, color: '#fff', speed: 0.5, fontSize: 20 },
    { value: '我很喜欢周董', time: 15, color: 'blue', speed: 2, fontSize: 26 },
]

var canvas = document.getElementById('canvas')
    // console.log(canvas);
var video = document.getElementById('video')
var $txt = document.getElementById('text')
var $btn = document.getElementById('btn')
var $color = document.getElementById('color')
console.log(color);
var $range = document.getElementById('range')
    // console.log(range);


// 创建CanvasBarrage 类  舞台的搭建
class CanvasBarrage {
    constructor(canvas, video, opts = {}) { // 定义一个构造函数
        if (!canvas || !video) return

        // 将传进来的参数挂在当前函数上
        this.video = video
        this.canvas = canvas
            // 设置canvas画布的宽高和video保持一致
        this.canvas.width = video.width
        this.canvas.height = video.height

        // 创建一个画布
        this.ctx = canvas.getContext('2d')
            // console.log(this.ctx);

        // 设置默认的弹幕样式，如果没传，就启用默认
        let defOpt = {
            color: '#e91e63',
            speed: 1,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }
        Object.assign(this, defOpt, opts)

        // 判断视屏是播放还是暂停状态, 默认true为暂停
        this.isPaused = true
            // 得到所有的弹幕消息
        this.barrages = this.data.map((item) => { // barrages里面现在装的就是一个数组，该数组里面存放了所有已经被初始化好了的弹幕
            return new Barrage(item, this)
        })
    }

    // 渲染canvas绘制的弹幕
    render() {
        // 渲染的第一步，是清除原来的画布
        this.clear()
            // 渲染弹幕
        this.renderBarrage()
        if (this.isPaused === false) {
            // 递归的渲染弹幕
            requestAnimationFrame(this.render.bind(this))
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    renderBarrage() {
        // 首先拿到视频播放的时间，根据播放的时间来判断当前弹幕是否出现
        let time = this.video.currentTime

        // 循环遍历所有的弹幕
        this.barrages.forEach(barrage => {
            if (time >= barrage.time && !barrage.flag) {

                // 判断当前弹幕已经初始化好了
                if (!barrage.isInit) {
                    barrage.init()
                    barrage.isInit = true
                }

                // 弹幕是要从右往左渲染，所以不断的让弹幕x轴坐标变小就可以了
                barrage.x -= barrage.speed
                barrage.render()

                if (barrage.x < -barrage.width) {
                    barrage.flag = true // flag 为 true 意味着弹幕走出了屏幕
                }
            }
        });
    }

    add(obj) {
        this.barrages.push(new Barrage(obj, this))
    }
}



// 创建一个Barrage类，用来实例化每一条弹幕
class Barrage {
    constructor(obj, ctx) {
            this.value = obj.value // 弹幕的内容
            this.time = obj.time // 弹幕出现的时间
            this.obj = obj
            this.context = ctx
        }
        // 初始化一条弹幕
    init() {
            this.color = this.obj.color || this.context.color
            this.speed = this.obj.speed || this.context.speed
            this.opacity = this.obj.opacity || this.context.opacity
            this.fontSize = this.obj.fontSize || this.context.fontSize

            // 计算每条弹幕的宽度
            let p = document.createElement('p')
            p.style.fontSize = this.fontSize + 'px'
            p.innerHTML = this.value
            document.body.appendChild(p)
            this.width = p.clientWidth
            document.body.removeChild(p)

            // 设置弹幕出现的位置
            this.x = this.context.canvas.width
            this.y = this.context.canvas.height * Math.random()

            // 做超出范围的处理
            if (this.y < this.fontSize) {
                this.y = this.fontSize
            } else if (this.y > this.context.canvas.height - this.fontSize) {
                this.y = this.context.canvas.height - this.fontSize
            }
        }
        // 让每一条弹幕出现在画布上
    render() {
        // 设置画布字体大小和字号
        this.context.ctx.font = `${this.fontSize}px Arial`
            // 设置画布字体颜色
        this.context.ctx.fillStyle = this.color
            // 绘制出文字
        this.context.ctx.fillText(this.value, this.x, this.y)
    }
}


let canvasBarrage = new CanvasBarrage(canvas, video, { data })
video.addEventListener('play', () => {
    canvasBarrage.isPaused = false
    canvasBarrage.render()
})

$btn.addEventListener('click', () => {
    let value = $txt.value
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = { value, time, color, fontSize }
    canvasBarrage.add(obj)
    $txt.value = ''
})