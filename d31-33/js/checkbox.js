function initCheckBox() {
    let regions = [];
    let products = [];
    for (let i = 0; i < sourceData.length; i++) {
        if (regions.map(item=>item.text).indexOf(sourceData[i].region) < 0) {
            regions.push({
                 text: sourceData[i].region,
                  value: sourceData[i].region 
                });
        }
        if (products.map(item=>item.text).indexOf(sourceData[i].product) < 0) {
            products.push({
                 text: sourceData[i].product,
                  value: sourceData[i].product 
                });
        }
    }
    createCheckBoxGroup(regionRadioWrapper, regions);
    createCheckBoxGroup(productRadioWrapper, products);
}
function createCheckBoxGroup(wrapper, data) {
    let checkAll = createCheckBoxWithLabel(wrapper.id + "all", "all", "all", "全选");
    wrapper.innerHTML = "";
    wrapper.appendChild(checkAll);
    data.forEach((item, i) => {
        let checkBox = createCheckBoxWithLabel(wrapper.id + i, "one", item.value, item.text);
        wrapper.appendChild(checkBox);
    })
    wrapper.childNodes[1].firstChild.checked = true;
    wrapper.onclick = function (event) {
        let target = event.target;
        console.log("target", target);
        if (target.nodeName.toLowerCase() === "input") {
            let checkboxs = wrapper.childNodes;
            if (target.getAttribute("checkbox-type") === "all") {
                checkboxs.forEach(item => {
                    item.firstChild.checked = true;
                })
            } else {
                if (!target.checked) {
                    let hasChecked = false;
                    checkboxs.forEach(item => {
                        if(item.firstChild.checked){
                            hasChecked =true;
                        }
                    });
                    if(!hasChecked){
                        target.checked = true;
                    } else {
                        checkboxs[0].firstChild.checked = false;
                    }
                } else {
                    let allChecked = true;
                    checkboxs.forEach(item => {
                        if(item.firstChild.getAttribute("checkbox-type") !== "all" && !item.firstChild.checked){
                            allChecked =false;
                        }
                    });
                    if(allChecked){
                        checkboxs[0].firstChild.checked = true;
                    }
                }
            }
        }
        updateTable();
    }

}

function createCheckBoxWithLabel(id, type, value, text) {
    let label = document.createElement("label");
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.value = value;
    checkBox.id = id;
    checkBox.setAttribute("checkbox-type", type);
    label.appendChild(checkBox);
    label.appendChild(document.createTextNode(text));
    label.htmlFor = id;
    return label;
}
