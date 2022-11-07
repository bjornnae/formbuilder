// localstorage tests

const prefix = "jdlahsud098sa"

function serializeToStorage(jObj){
    let data = localStorage.setItem(prefix + "data", JSON.stringify(jObj))
}

function parseFromStorage(){
    let jObj = JSON.parse(localStorage.getItem(prefix + "data"))
    return jObj
}

function storeJSON(json){
    localStorage.setItem
}

function touchDataTimestamp(){
    let ts = Date.now()
    internaldata.modificationTime = ts
}

async function digestMessage(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return hash;
  }
  

function dataInSync(){
    d1 = JSON.stringify(internaldata)
    d2 = JSON.stringify(parseFromStorage())
    return (d1 == d2)
}



function syncData(){
    localTimestamp = internaldata.modificationTime
    storeTimestamp = parseFromStorage().modificationTime
    if (localTimestamp < storeTimestamp){
        // load from localstore
        internaldata = parseFromStorage()
        console.info("SYNC: Data loaded to internal from local store.")
    } else {
        // load from internaldata to storage.
        serializeToStorage(internaldata)
        console.info("SYNC: Data saved from internal to local store.")

    }
}

function test1(){
    const d =  {
        "pages": [
          "parameters",
          "pages",
          "inputs",
          "model",
          "data"
        ]}
    serializeToStorage(d)
    let ans = parseFromStorage()
    console.info(`test: ${d["pages"][1] === ans["pages"][1]}`)
    console.info(`test:  ${ans["pages"][1]}`)
}
