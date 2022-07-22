/**
 * 给定两个字符串
 * 返回相加后的结果，不可以使用强制转化
*/

let str1 = "9333852702227987"
let str2 = "85731737104263"
function sum(str1, str2) {
    let arr1 = []
    let arr2 = []
    let res =0
    for (let i = str1.length - 1; i >= 0; i--) {
        arr1.push(str1[i])
    }
    for (let j = str2.length - 1; j >= 0; j--) {
        arr2.push(str2[j])
    }
    // console.log(arr1, arr2);
    for (let k = 0; k < arr1.length; k++) {
        if (arr1[k] === undefined || arr2 === undefined) {
            return
        }
        else {
            let x = 0
            let n = (parseInt(arr1[k]) + parseInt(arr2[k]))
            console.log(n);
            if (n > 9) {
                x = 1
                n = n % 10
                console.log("+++++", n);
            }
            res = res + n * Math.pow(10, k) + x * Math.pow(10, k + 1)
            x = 0
            console.log("-----------" + res);
        }
    }
    return res
}

console.log(sum(str1, str2));
// sum(str1, str2)