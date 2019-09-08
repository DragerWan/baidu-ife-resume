function drawBarChart(){
    let chartWrapper = document.querySelector("#bar-chart-wrapper");
    chartWrapper.setAttribute("style","margin:10px 0");
    let svg =document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "width:100%;height:100px;");
    svg.setAttribute("viewBox", "0 0 100 100");

    let rect=document.createElementNS('http://www.w3.org/2000/svg','rect'); 
		rect.setAttribute("x","10");
		rect.setAttribute("y","10");
		rect.setAttribute("width","20");
		rect.setAttribute("height","20");
        rect.setAttribute("style","fill:#ff6666;stroke-width:1;stroke:rgb(255,0,0)");
        
    svg.appendChild(rect);

    let line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute("x1", "0.5");
    line.setAttribute("y1", "0");
    line.setAttribute("x2", "0.5");
    line.setAttribute("y2", "100");
    line.setAttribute("style", "stroke:rgb(100, 100, 100);stroke-width:1");

    svg.appendChild(line);


    chartWrapper.appendChild(svg);
}