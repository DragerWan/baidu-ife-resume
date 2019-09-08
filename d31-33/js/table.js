function updateTable() {
    let regions = [];
    let products = [];
    regionRadioWrapper.childNodes.forEach(item=>{
        if(item.firstChild.getAttribute("checkbox-type") === "one" && item.firstChild.checked){
            regions.push(item.firstChild.value);
        }
    });
    productRadioWrapper.childNodes.forEach(item=>{
        if(item.firstChild.getAttribute("checkbox-type") === "one" && item.firstChild.checked){
            products.push(item.firstChild.value);
        }
    });
    let data = sourceData.filter(item => (regions.indexOf(item.region) >= 0 && products.indexOf(item.product) >= 0));
    renderTable(data);
}

function renderTable(data) {
    console.log("data", data);
    let regions = [];
    let products = [];
    data.sort((a, b)=>(a.product.localeCompare(b.product) || a.region.localeCompare(b.region)));
    console.log("data", data);
    data.forEach(item=>{
        if(regions.indexOf(item.region) < 0){
            regions.push(item.region);
        }
        if(products.indexOf(item.product) < 0){
            products.push(item.product);
        }
    })

    let table = document.createElement("table");
    if(regions.length == 1 && products.length > 1){
        table.innerHTML = "" +
        "<tr>" +
        "<th>地区</th><th>商品</th>" +
        "<th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th>" +
        "<th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>" +
        "</tr>" +
        "";
        data.forEach(item => {
        let row = document.createElement("tr");
        let product = document.createElement("td");
        let region = document.createElement("td");
        product.textContent = item.product;
        region.textContent = item.region;
        let regionIndex = regions.indexOf(item.region);
        if(regionIndex >= 0){
            regions.splice(regionIndex, 1);
            region.rowSpan = data.filter(rowFilter=>rowFilter.region === item.region).length;
            row.appendChild(region);
        }
        row.appendChild(product);
        item.sale.forEach(value => {
            let sale = document.createElement("td");
            sale.textContent = value.toString();
            row.appendChild(sale);
        })
        table.appendChild(row);
    })
    } else {
        table.innerHTML = "" +
        "<tr>" +
        "<th>商品</th><th>地区</th>" +
        "<th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th>" +
        "<th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>" +
        "</tr>" +
        "";
        data.forEach(item => {
        let row = document.createElement("tr");
        let product = document.createElement("td");
        let region = document.createElement("td");
        product.textContent = item.product;
        region.textContent = item.region;
        let productIndex = products.indexOf(item.product);
        if(productIndex >= 0){
            products.splice(productIndex, 1);
            product.rowSpan = data.filter(rowFilter=>rowFilter.product === item.product).length;
            row.appendChild(product);
        }
        row.appendChild(region);
        item.sale.forEach(value => {
            let sale = document.createElement("td");
            sale.textContent = value.toString();
            row.appendChild(sale);
        })
        table.appendChild(row);
    })
    }
    tableWrapper.innerHTML = "";
    tableWrapper.appendChild(table);
}