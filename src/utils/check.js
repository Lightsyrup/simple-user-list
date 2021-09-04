export function loginRegex(login) {
    const uPattern = /(^[a-zA-Z0-9_-]{4,16}$)|(^$)/;
    if (!uPattern.test(login)) {
        alert("请按要求输入您的用户名！");
    } else {
        return true;
    }
}

export function nameRegex(name) {
    const cnPattern = /(^[\u4E00-\u9FA5])|(^$)/;
    if (!cnPattern.test(name)) {
        alert("请按要求输入您的姓名！");
    } else {
        return true;
    }
}
 s
export function emailRegex(email) {
    const ePattern = /(^([A-Za-z0-9_\\.])+@([A-Za-z0-9_\\.])+\.([A-Za-z]{2,4})$)|(^$)/;
    if (!ePattern.test(email)) {
        alert("请按要求输入您的邮箱！");
    } else {
        return true;
    }
}

export function deleteBlank(str) {
    str = str.replace(/\s/g, "");
    return str;
}

export function checkInputBlank(str) {
    const arr = [...str];
    for (let item of arr) {
        if (item.length == 0) {
            alert("请完善输入内容！");
            return false;
        }
    }
    return true;
}