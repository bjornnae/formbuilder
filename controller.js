// This is the controller layer. here you are allowed to connect views with data. 

/// Application ///

function hideAllPages(){
    for (var i in internaldata.pages){
        document.getElementById([internaldata.pages[i]] + "Div").setAttribute("style", "display:none;")
    }
}


function showPage(pageName){
    let pname = pageName + "Div"
    document.getElementById(pname).setAttribute("style", "display:block")
}


/// Pages ///

function userClicksAddPage(){
console.warn("Not implemented!")
}

/// Pages ///
function showPages(){
    hideAllPages()
    showPage("pages")

}


/// Parameters ///


function showParameters(){
    hideAllPages()
    showPage("parameters")
}


/// Data ///

function showData(){
    hideAllPages()
    let pre = document.createElement('pre')
    pre.innerHTML = "var internaldata = " + JSON.stringify(internaldata, null, 2)
    let d = document.getElementById('dataDiv')
    d.innerHTML = ""
    d.appendChild(pre)
    showPage("data")
}


/// Input element ///

function renderInputForm(){
    let form = document.getElementById("resultingForm")
    form.innerHTML = ""
    for (var i in internaldata.inputs){
        let e = renderInput(internaldata.inputs[i])
        form.appendChild(e)
    }

}

function userClicksSubmitElement(){
    let o = getInputFormValues()
    internaldata.inputs.push(o)
    clearInputFormValues()
    showInputList()
    renderInputForm()
}

function showInputs(){
    hideAllPages()
    showPage("inputs")
}



/// Model ///


function updateModelList(){
    let modelList = document.getElementById("modelList")
    modelList.innerHTML = ""
    for (var i in internaldata.model){
        let li = document.createElement("li")
        li.innerHTML = internaldata.model[i].dotPath + "&nbsp;&nbsp;<a href='javascript:userClicksUpdateModelElement(\"" + internaldata.model[i].id +"\")'>U</a>&nbsp;|&nbsp;<a href='javascript:userClicksDeleteModelElement(\""+internaldata.model[i].id+"\")'>D</a>&nbsp;|&nbsp;<a href='javascript:userClicksMoveModelElemUp(\""+internaldata.model[i].id+"\")'>&uarr;</a>"
        
        modelList.appendChild(li)
    }
}

function userClicksMoveModelElemUp(idx){
    moveModelElementUp(idx)
    updateModelList()

}

function userClicksDeleteModelElement(idx){
    deleteModelElement(idx)
    updateModelList()
}

function userClicksUpdateModelElement(idx){
    loadUpdateModelElement(idx)
}

function userClicksAddModelElem(){
    let vals = getModelValues() 
    touchDataTimestamp()
    if (vals.idx == ""){
        let mo = makeModelElement(vals.dotPath, vals.elemDescription)
        internaldata.model.push(mo)
    } else {
        let mo = updateModelElement(vals.idx, vals.dotPath, vals.elemDescription)
        internaldata.model[getModelElemIndexById(vals.idx)] = mo}
    clearModelValues()
    updateModelList()
}

function userClicksClearModelInput(){
    clearModelValues()
}



function showModel(){
    hideAllPages()
    showPage("model")
    updateModelList()
}


// Import model

function importModel(){
    hideAllPages()
    showPage("importModel")
}

function userClicksImportModelDataButton(){
    let modelData = document.getElementById("modelInputArea").value
    //console.debug(`click import model data.--> ${modelData}`)
    hideAllPages()
    importModelData(modelData)
    showPage("model")
}
