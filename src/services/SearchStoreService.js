import stringSimilarity from "string-similarity";

export function SearchStoreService(storeList, searchTerm) {
    let storesFound = [];
    storeList.forEach((store) => {
        store.addressName.split(" ").forEach((token) => {
            let storeNameMatch = stringSimilarity.compareTwoStrings(token, searchTerm);
            if(storeNameMatch >= 0.6) {
                storesFound.push(store);
            } else if(storeNameMatch >= 0.9) {
                storesFound = store;
            }
            return;
        });
    })
    return storesFound;
}