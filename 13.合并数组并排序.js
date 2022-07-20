/**
 * 请把两个数组 ['A1, 'A2, 'B1, 'B2', 'C1,"C2,, "D1,
    "D2"和[’A, "B;‘C:"D1，合并为 [A1,'A2:,'A, "B1"
    "B2", 'B,'C1', 'C2','C', 'D1', 'D2',"D]。
*/

function fun(arr1, arr2) {
    arr2 = arr2.map((item) => {
        return (item + 9)
    })
    let arr = [...arr1, ...arr2].sort().map((item) => {
        if (item.includes('9')) {
            return item.split('')[0]
        }
        return item
    })
    return arr


}

console.log(fun(arr1, arr2));