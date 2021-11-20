function isEmptyObject(obj) {
    for(let prop in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
    // JSON.stringify: convert to string
}
// tra ve true la object rong va nguoc lai

export const helper = {
    isEmptyObject
}
