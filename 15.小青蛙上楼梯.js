/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 
 * 动态规划
 * 1.确定路径
 *  第n阶台阶方法 = n-1+ n-2阶台阶的方法和
*/

function fun(n) {
    let arr = [0,1,2]

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}

console.log(fun(7));