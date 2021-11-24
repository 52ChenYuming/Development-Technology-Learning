function Block() {
    this.upDivWrap = null; //上方管道
    this.downDivWrap = null;

    //用来生成div容器
    this.createDiv = function(url, height, positionType, left, top) {
        let newDiv = document.createElement('div');
        newDiv.style.width = '62px';
        newDiv.style.height = height;
        newDiv.style.position = positionType;
        newDiv.style.left = left;
        newDiv.style.top = top;
        newDiv.style.backgroundImage = url;
        return newDiv;
    }
    this.createBlock = function() {
        let upDiv1 = this.createDiv('url(img/up_mod.png)', '200px');
        let upDiv2 = this.createDiv('url(img/up_pipe.png)', '60px');
        this.upDivWrap = this.createDiv(null, null, 'absolute', '450px');
        this.upDivWrap.appendChild(upDiv1);
        this.upDivWrap.appendChild(upDiv2);
        jsWrapBg.appendChild(this.upDivWrap);
    }
}