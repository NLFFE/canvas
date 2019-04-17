window.onload = function(){
    let g = new CircleGraph("#myCanvas", "#ddd", "rgba(0, 123, 255, 0.8)");

    let btn = document.querySelector("#startBtn");
    g.animationDraw(75, 100,3000);
    btn.addEventListener("click", ()=>{
        g.animationDraw(75, 100,3000);
    });

    let line = new LineGraph("#lineChart","rgba(0,123,255,0.8)","rgba(0,123,255,0.8)");
    let dataSet = [5,20,40,90,100,120,50,70];
    line.draw(dataSet);
}