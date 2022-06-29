export function RestService(path, dataHandlerCallBack, handleFetchError) {
    fetch(path)
    .then(response => response.json())
    .then(data=> dataHandlerCallBack(processStoreData(data)))
    .catch((error) => {
        console.error(error)
        handleFetchError();
    });

    function processStoreData(storesJson) {
        storesJson.forEach((store) => {
            let firstPartOfTheCityName = store.addressName.split(" ")[1]
            if(firstPartOfTheCityName === "St." || firstPartOfTheCityName === "Ter" || firstPartOfTheCityName === "Son") {
                store.city = firstPartOfTheCityName + " " + store.addressName.split(" ")[2]
            } else {
                store.city = firstPartOfTheCityName
            }
            store.addressName = processStoreName(store.addressName);
        })

        function processStoreName(storeName) {
            let storeNameArray = storeName.split(" ")
            storeNameArray.shift()
            let name = storeNameArray.join(" ");
            return name
        }
        return storesJson
    }
}