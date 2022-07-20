/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

    F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
    斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

    答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

*/
//动态规划
let map = new Map()
function fib(n) {

    if (n === 0 || n === 1) return n
    // return fib(n - 1) + fib(n - 2)
    if (map.has(n)) {
        return map.get(n)
    }
    else {
        map.set(n, (fib(n - 1) + fib(n - 2)) % 1000000007)
        return map.get(n)
    }
}
console.log(fib(999));
console.log(map);