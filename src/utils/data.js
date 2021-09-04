export function deepClone(obj) {
    if (obj === null || !obj) return obj;
    if (Object.prototype.toString.call(obj) === "[object Object]") {
        let target = {};
        const keys = Object.keys(obj);
        keys.forEach(key => {
            if (obj[key] && typeof obj[key] === "object")
                target[key] = deepClone(obj[key]);
            else
                target[key] = obj[key];
        });
        return target;
    } else if (Array.isArray(obj)) {
        let arr = [];
        obj.forEach((item, index) => {
            if (item && typeof item === "object")
                arr[index] = deepClone(item);
            else
                arr[index] = item;
        });
        return arr;
    }
}

