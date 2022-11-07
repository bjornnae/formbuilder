//tables.js -- Code for manipulating tables.

function addTableRow(tableBodyId, numberOfCols){
  let tr = document.createElement("tr")
  for (var i = 0; i < numberOfCols; i++){
    let td = document.createElement('td')
    td.setAttribute("contenteditable", 'true')
    tr.appendChild(td)
  }
  let tbody = document.getElementById(tableBodyId)
  tbody.appendChild(tr)
}



function clearTableRows(tableBodyId){
    let tbody = document.getElementById(tableBodyId)
    tbody.innerHTML = ""
}

function createTableRows(tableBodyId, rows){
    let tbody = document.getElementById(tableBodyId)
    for (var r = 0; r < rows.length; r++){
        let tr = document.createElement("tr")
        for (var i = 0; i < rows[r].length; i++){
            let td = document.createElement("td")
            td.innerHTML = rows[r][i]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
}

function getTableRowAsArray(tableBodyId, rowIndex){
    let tbody = document.getElementById(tableBodyId)
    let row = []
    for (var i = 0; i < tbody.rows[rowIndex].cells.length; i++){
        row.push(tbody.rows[rowIndex].cells[i].textContent)
    }
    return row
}

function tableTest(){
    clearTableRows("enumListingTBody")
    createTableRows("enumListingTBody", [["galdenarskategori", "some description", ""],["landriskkategori", "some description", ""],[]])
    //addTableRowActions(tableBodyId, actionUpdate, actionDelete)
    let tr1 = getTableRowAsArray("enumListingTBody", 1)
    console.debug(`test table: ${tr1[0] == "landriskkategori"} ${tr1}`)
}


function showElement(elemId){
    let e = document.getElementById(elemId)
    e.setAttribute("style", "display:block")
}

function hideElement(elemId){
    let e = document.getElementById(elemId)
    e.setAttribute("style", "display:none")
}

