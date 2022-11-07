function showEnumListing(){
    let tname = "enumListingTBody"
    let tbody = document.getElementById(tname)
    clearTableRows(tname)
    createTableRows(tname, [[internaldata.parameters.enums[0], "some description", ""],["landriskkategori", "some description", ""],[]])

}