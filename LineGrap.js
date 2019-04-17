class LineGraph {
    constructor(el, dotColor, lineColor, dotSize = 4){
        this.canvas = document.querySelector(el);
        this.ctx = this.canvas.getContext("2d");
        this.dotColor = dotColor;
        this.lineColor = lineColor;
        this.dotSize = dotSize;
    }

    draw(dataset){
        let max = Math.max.apply(null, dataset);
        let w = this.canvas.width;
        let h = this.canvas.height;

        let gMax = h - 130;

        
        //외곽선 그리기
        this.ctx.strokeStyle = "#000";
        
        this.ctx.moveTo(60, 60);
        this.ctx.lineTo(60, h - 60);
        this.ctx.lineTo(w-60, h - 60);
        this.ctx.stroke();

        let width = (w - 130 ) / dataset.length;
        let x = width;

        let dotPos = [];
        for(let i = 0; i < dataset.length; i++){
            let d = (dataset[i] * gMax) / max;
            this.ctx.fillStyle = this.dotColor;
            dotPos.push({x: x + 60, y: h-60-d});
            this.ctx.fillRect(x + 60 - this.dotSize / 2,
                         h - 60 - d - this.dotSize/2, 
                         this.dotSize, this.dotSize);
            x += width;
        }
        
        this.ctx.strokeStyle = this.lineColor;
        //this.ctx.beginPath();
        this.ctx.moveTo(60, h-60);
        dotPos.forEach(item => {
            this.ctx.lineTo(item.x, item.y);
        });
        // for(let i = 0; i < dotPos.length; i++){
        //     this.ctx.lineTo(dotPos[i].x, dotPos[i].y);
        // }
        //this.ctx.closePath();
        this.ctx.stroke();
        
    }
}