
function makeModelElement(dotPath, description){
    let e = new Object({
        "id" : "",
        "dotPath" : dotPath,
        "path" : [],
        "description" : "" })
    let spath = dotPath.split(".")
    e.path = spath
    e.id = self.crypto.randomUUID() 
    e.description = description
    return e }

function updateModelElement(idx, dotPath, elemDescription){
    let eu = makeModelElement(dotPath, elemDescription)
    eu.id = idx
    return eu
}

function deleteModelElement(idx){
    touchDataTimestamp()
    for (var i = 0; i < internaldata.model.length; i++){
        if (internaldata.model[i].id == idx){
            internaldata.model.splice(i, 1)
            break;
        }
    }
}

function moveModelElementUp(idx){
    touchDataTimestamp()
    for (var i = 1 ; i < internaldata.model.length; i++){
        if (internaldata.model[i].id == idx ){
            let a = internaldata.model[i-1]
            internaldata.model[i-1] = internaldata.model[i]
            internaldata.model[i] = a
            break;
        }
    }
}

function getModelValues(){
    let idx = document.getElementById("modelElemIndex")
    let dotPath = document.getElementById("modelElemDotPath")
    let elemDescription = document.getElementById("modelElemDescription")
    return {"idx" : idx.value, "dotPath": dotPath.value, "elemDescription": elemDescription.value}
}

function clearModelValues(){
    let idx = document.getElementById("modelElemIndex")
    let dotPath = document.getElementById("modelElemDotPath")
    let elemDescription = document.getElementById("modelElemDescription")
    idx.value = ""
    dotPath.value = ""
    elemDescription.value=""
}

function getModelElementByID(id){
    let elems = internaldata.model
    for (var i = 0; i < elems.length; i++){
        if (internaldata.model[i].id == id){
            return internaldata.model[i]
        }
    }
}

function getModelElemIndexById(id){
    for (var i = 0; i < internaldata.model.length; i++){
        if (internaldata.model[i].id == id){
            return i
        }
    }
}

function loadUpdateModelElement(idx){
    //let me = internaldata.model[idx]
    let me = getModelElementByID(idx)
    document.getElementById('modelElemIndex').value = me.id
    document.getElementById('modelElemDotPath').value = me.dotPath
    document.getElementById('modelElemDescription').value = me.description
}

// Import model data

function importModelData(modelData){
    let lines = modelData.split("\n")
    lines.forEach(element => {
       [id, dotPath, description] = element.split(";")
       console.info(`id: ${id}, name: ${dotPath}, descr: ${description}`)
       //TBD: This assumes that only new elements are imported. If Id is present should be synced with internal store so that no duplicates occur.
       let el = makeModelElement(dotPath, description)
       internaldata.model.push(el) 
    });
}


