/* create tr and td */
let divTable = document.createElement("div");
let tableRow = document.createElement("input")
let tableData = document.createElement("input");
let btnTable = document.createElement("button");
let table = document.createElement("table");
let clearTableBtn = document.createElement("button")

/* tableRow && tableData  */
tableRow.style.height = "50px";
tableData.style.height = "50px";
tableRow.style.border = "2px black solid"
tableData.style.border = "2px brown solid"
tableRow.style.borderRadius = "10px";
tableData.style.borderRadius = "10px"
tableRow.style.fontSize = "20px";
tableData.style.fontSize = "20px";
tableRow.style.paddingLeft = "15px";
tableData.style.paddingLeft = "15px"

/* btnTable && clearTableBtn */
btnTable.style.width = "150px";
btnTable.style.height = "50px";
clearTableBtn.style.width = "150px";
clearTableBtn.style.height = "50px";
btnTable.style.backgroundColor = "green";
clearTableBtn.style.backgroundColor = "red"
btnTable.style.borderRadius = "15px";
clearTableBtn.style.borderRadius = "15px";
btnTable.style.fontSize = "22px";
clearTableBtn.style.fontSize = "22px"


let trc;
let tdc;

let tableRowValue = tableRow.addEventListener("change", 
        function(e) {
            return  trc = Number(e.target.value)
        });
let tableDataValue = tableData.addEventListener("change", 
        function(e) {
           return  tdc = Number(e.target.value)
        });

btnTable.innerHTML = "Create table";
tableRow.placeholder = "Table Row"
tableData.placeholder = "Table Data";
clearTableBtn.innerHTML = "Clear"

document.body.appendChild(tableRow);
document.body.appendChild(tableData);
document.body.appendChild(btnTable);
document.body.appendChild(clearTableBtn)

btnTable.addEventListener("click", function() {
      for(let i = 0; i < trc; i++) {
        const tbRow = document.createElement("tr"); 
            if(i % 2 === 0) {
                tbRow.style.backgroundColor = "grey"
            } else {
                tbRow.style.backgroundColor = "lightGrey"
            }
            table.appendChild(tbRow)
        for(let j = 0; j < tdc; j++) {
            const tbData = document.createElement("td");
                  tbData.innerHTML = Math.random();
                  tbData.style.border = "2px black solid";
                  tbRow.appendChild(tbData)
        }  
    }  
   return document.body.appendChild(divTable) + divTable.appendChild(table)
})

clearTableBtn.addEventListener("click", function() {
    tableRow.value = "";
    tableData.value = "";
    divTable.innerHTML = ""
})
