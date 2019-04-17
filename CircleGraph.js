let {PI, floor} = Math;
class CircleGraph {
    constructor(el, fillColor, graphColor){
        this.canvas = document.querySelector(el);
        this.ctx = this.canvas.getContext("2d");
        this.fillColor = fillColor;
        this.gColor = graphColor;
        this.timer;
    }

    animationDraw(value, r, time = 1000){
        clearInterval(this.timer);
        let c = 0;
        this.timer = setInterval( ()=>{
            c += value / ( time / 60);
            if(c >= value ) {
                c = value;
                clearInterval(this.timer);
            }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.draw(c, r);
        }, time / 60);
    }

    draw(value, r){
        let x = this.canvas.width / 2;
        let y = this.canvas.height / 2;

        //외곽 원 그림
        this.ctx.fillStyle = this.fillColor;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, - PI / 2,  3/2 * PI);
        this.ctx.closePath();
        this.ctx.fill();

        //반호 그리기
        let rad = (value / 100)  * (2 * PI);
        this.ctx.fillStyle = this.gColor;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.arc(x, y, r, -PI/2, -PI / 2 + rad);
        this.ctx.closePath();
        this.ctx.fill();
        
        //내부 동그라미
        this.ctx.fillStyle = "#fff";
        this.ctx.beginPath();
        this.ctx.arc(x, y, r * 0.75, -PI / 2, 3/2 * PI);
        this.ctx.closePath();
        this.ctx.fill();

        //텍스트 그리기
        this.ctx.fillStyle = "#000";
        this.ctx.font = `${r / 3}px Arial`;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";

        this.ctx.fillText(`${floor(value)}%`, x, y);
    }
}