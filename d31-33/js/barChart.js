function drawBarChart(){
    let data = sourceData[0];
    let chartWrapper = document.querySelector("#bar-chart-wrapper");
    chartWrapper.setAttribute("style","margin:10px 0");
    let svg =document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "width:100%;height:300px;");
    svg.setAttribute("viewBox", "0 0 100 100");

    let lineX = document.createElementNS('http://www.w3.org/2000/svg','line');
    lineX.setAttribute("x1", "2");
    lineX.setAttribute("y1", "98");
    lineX.setAttribute("x2", "99");
    lineX.setAttribute("y2", "98");
    lineX.setAttribute("style", "stroke:rgb(100, 100, 100);stroke-width:1");

    svg.appendChild(lineX);

    let arrowX = document.createElementNS('http://www.w3.org/2000/svg','path');
    arrowX.setAttribute("d", "M96 96 L100 98 L96 100");
    arrowX.setAttribute("style", "fill:rgb(100, 100, 100);");

    svg.appendChild(arrowX);

    let lineY = document.createElementNS('http://www.w3.org/2000/svg','line');
    lineY.setAttribute("x1", "2");
    lineY.setAttribute("y1", "1");
    lineY.setAttribute("x2", "2");
    lineY.setAttribute("y2", "98.5");
    lineY.setAttribute("style", "stroke:rgb(100, 100, 100);stroke-width:1");

    let arrowY = document.createElementNS('http://www.w3.org/2000/svg','path');
    arrowY.setAttribute("d", "M0 4 L2 0 L4 4");
    arrowY.setAttribute("style", "fill:rgb(100, 100, 100);");

    svg.appendChild(arrowY);

    svg.appendChild(lineY);

    let rect=document.createElementNS('http://www.w3.org/2000/svg','rect'); 
		rect.setAttribute("x","10");
		rect.setAttribute("y","10");
		rect.setAttribute("width","20");
		rect.setAttribute("height","20");
        rect.setAttribute("style","fill:#ff6666;stroke-width:1;stroke:rgb(255,0,0)");
        
    svg.appendChild(rect);

    chartWrapper.appendChild(svg);
}

function testSVG(){
    let chartWrapper = document.querySelector("#bar-chart-wrapper");
    chartWrapper.setAttribute("style","margin:10px 0");
    let svg =document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "width:100%;height:300px;");
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

    let circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    
    circle.setAttribute("cx", "60");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "10");
    circle.setAttribute("stroke", "#33e");
    circle.setAttribute("fill", "#99e");

    svg.appendChild(circle);

    let text = document.createElementNS('http://www.w3.org/2000/svg','text');
    text.innerHTML = "Hello SVG";
    text.setAttribute("x","40");
	text.setAttribute("y","20");

    svg.appendChild(text);

    let path=document.createElementNS('http://www.w3.org/2000/svg','path'); 
    path.setAttribute("id","c1");
    path.setAttribute("strok","blue");
    let animate_1=document.createElementNS('http://www.w3.org/2000/svg','animate'); 
    animate_1.setAttribute("id","p1");
    animate_1.setAttribute("attributeName","d");
    animate_1.setAttribute("values","m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0");
    animate_1.setAttribute("dur","6s");
    animate_1.setAttribute("repeatCount","indefinite");

    let animate_2=document.createElementNS('http://www.w3.org/2000/svg','animate'); 
    animate_2.setAttribute("attributeName","stroke-width");
    animate_2.setAttribute("values","0;4;4;0");
    animate_2.setAttribute("dur","6s");
    animate_2.setAttribute("repeatCount","indefinite");
    animate_2.setAttribute("begin","p1.begin");

    path.appendChild(animate_1);
    path.appendChild(animate_2);
    svg.appendChild(path);

    let path_1=document.createElementNS('http://www.w3.org/2000/svg','path'); 
    path_1.setAttribute("stroke","red");
    path_1.setAttribute("stroke-width","1");
    path_1.setAttribute("fill","yellow");
    path_1.setAttribute("d","M 42 50 c -5 -30 21 -30 16 0");
    svg.appendChild(path_1);
    let path_2 = path_1.cloneNode(false);
    path_2.setAttribute("transform", "rotate(60 50 60)");
    svg.appendChild(path_2);
    let path_3 = path_1.cloneNode(false);
    path_3.setAttribute("transform", "rotate(120 50 60)");
    svg.appendChild(path_3);
    let path_4 = path_1.cloneNode(false);
    path_4.setAttribute("transform", "rotate(180 50 60)");
    svg.appendChild(path_4);
    let path_5 = path_1.cloneNode(false);
    path_5.setAttribute("transform", "rotate(240 50 60)");
    svg.appendChild(path_5);
    let path_6 = path_1.cloneNode(false);
    path_6.setAttribute("transform", "rotate(300 50 60)");
    svg.appendChild(path_6);
    let center = document.createElementNS('http://www.w3.org/2000/svg','circle');
    center.setAttribute("cx", "50");
    center.setAttribute("cy", "60");
    center.setAttribute("r", "12");
    center.setAttribute("stroke", "#f66");
    center.setAttribute("fill", "pink");
    svg.appendChild(center);


    chartWrapper.appendChild(svg);
}