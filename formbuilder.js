


function getInputFormValues(){
    let o = {
        "inputModelElement" : document.getElementById('inputModelElement').value,
        "inputLabelValue" : document.getElementById('inputLabelValue').value,
        "inputHelpValue" : document.getElementById('inputHelpValue').value,
        "inputType" : document.getElementById('inputType').selectedOptions[0].value,
        "inputAltTextValue" : document.getElementById('inputAltTextValue').value
    }
    return o
}

function setInputFormValues(o){
   document.getElementById('inputModelElement').value =  o["inputModelElement"]
   document.getElementById('inputLabelValue').value = o["inputLabelValue"]
   document.getElementById('inputHelpValue').value = o['inputHelpValue']
   document.getElementById('inputType').selectedOptions[0].value = o["inputType"]
   document.getElementById('inputAltTextValue').value = o["inputAltTextValue"]
}

function clearInputFormValues(){
    document.getElementById('inputModelElement').value = ""
    document.getElementById('inputLabelValue').value = ""
    document.getElementById('inputHelpValue').value = ""
    document.getElementById('inputType').selectedOptions[0].value = ""
    document.getElementById('inputAltTextValue').value = ""
 
}


function showInputList(){
    let ul= document.getElementById("inputList")
    ul.innerHTML = ""
    for (var i in internaldata.inputs){
        let li = document.createElement("li")
        li.innerHTML = internaldata.inputs[i].inputLabelValue
        ul.appendChild(li)
    }
}


function inputGeneric(o){
    let div = document.createElement("div")
    div.setAttribute("class","container")
    let label = document.createElement("label")
    label.setAttribute("for", o.inputModelElement)
    label.setAttribute("class", "label")
    label.innerHTML = o.inputLabelValue
    div.appendChild(label)
    let input = document.createElement("input")
    input.setAttribute("id", o.inputModelElement)
    input.setAttribute("class", "input")
    input.setAttribute("type", "text")
    input.setAttribute("alt", o.inputAltTextValue)
    div.appendChild(input)
    let help = document.createElement("p")
    help.setAttribute("class", "help")
    help.innerHTML = o.inputHelpValue
    div.appendChild(help)
    return div
}

function inputText(o){
    let div = document.createElement("div")
    div.setAttribute("class","container")
    let label = document.createElement("label")
    label.setAttribute("for", o.inputModelElement)
    label.setAttribute("class", "label")
    label.innerHTML = o.inputLabelValue
    div.appendChild(label)
    let input = document.createElement("input")
    input.setAttribute("id", o.inputModelElement)
    input.setAttribute("class", "input")
    input.setAttribute("type", "text")
    input.setAttribute("alt", o.inputAltTextValue)
    div.appendChild(input)
    let help = document.createElement("p")
    help.setAttribute("class", "help")
    help.innerHTML = o.inputHelpValue
    div.appendChild(help)
    return div
}

function inputDate(o){
    let div = document.createElement("div")
    div.setAttribute("class","container")
    let label = document.createElement("label")
    label.setAttribute("for", o.inputModelElement)
    label.setAttribute("class", "label")
    label.innerHTML = o.inputLabelValue
    div.appendChild(label)
    let input = document.createElement("input")
    input.setAttribute("id", o.inputModelElement)
    input.setAttribute("class", "input")
    input.setAttribute("type", "date")
    input.setAttribute("alt", o.inputAltTextValue)
    div.appendChild(input)
    let help = document.createElement("p")
    help.setAttribute("class", "help")
    help.innerHTML = o.inputHelpValue
    div.appendChild(help)
    return div
}

function inputTime(o){
    let div = document.createElement("div")
    div.setAttribute("class","container")
    let label = document.createElement("label")
    label.setAttribute("for", o.inputModelElement)
    label.setAttribute("class", "label")
    label.innerHTML = o.inputLabelValue
    div.appendChild(label)
    let input = document.createElement("input")
    input.setAttribute("id", o.inputModelElement)
    input.setAttribute("class", "input")
    input.setAttribute("type", "time")
    input.setAttribute("alt", o.inputAltTextValue)
    div.appendChild(input)
    let help = document.createElement("p")
    help.setAttribute("class", "help")
    help.innerHTML = o.inputHelpValue
    div.appendChild(help)
    return div
}

function inputNumber(o){
    let div = document.createElement("div")
    div.setAttribute("class","container")
    let label = document.createElement("label")
    label.setAttribute("for", o.inputModelElement)
    label.setAttribute("class", "label")
    label.innerHTML = o.inputLabelValue
    div.appendChild(label)
    let input = document.createElement("input")
    input.setAttribute("id", o.inputModelElement)
    input.setAttribute("class", "input")
    input.setAttribute("type", "number")
    input.setAttribute("alt", o.inputAltTextValue)
    div.appendChild(input)
    let help = document.createElement("p")
    help.setAttribute("class", "help")
    help.innerHTML = o.inputHelpValue
    div.appendChild(help)
    return div
}

function inputCheckbox(o){
    let div = document.createElement("div")
    div.setAttribute("class","form-group")
    let label = document.createElement("label")
    label.setAttribute("for", o.inputModelElement)
    label.setAttribute("class", "label")
    label.innerHTML = o.inputLabelValue
    div.appendChild(label)
    let input = document.createElement("input")
    input.setAttribute("id", o.inputModelElement)
    input.setAttribute("class", "checkbox")
    input.setAttribute("type", "checkbox")
    input.setAttribute("alt", o.inputAltTextValue)
    div.appendChild(input)
    let help = document.createElement("p")
    help.setAttribute("class", "help")
    help.innerHTML = o.inputHelpValue
    div.appendChild(help)
    return div
}

function renderInput(o){
    let e = ""
    if(o.inputType == "text"){
        e = inputText(o)
        return e
    }

    if(o.inputType == "date"){
        e = inputDate(o)
        return e
    }

    if(o.inputType == "time"){
        e = inputTime(o)
        return e
    }

    if(o.inputType == "number"){
        e = inputNumber(o)
        return e
    }
    
    if(o.inputType == "checkbox"){
        e = inputCheckbox(o)
        return e
    }

    return inputText(o)
}


