/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// SOLUTION: IT IS BASICALLY FIBONACI

// recursive
// var climbStairs = function(n) {
//   if (n <= 2) return n;
//    return climbStairs(n - 2) + climbStairs(n - 1);
// };

// memoization
function climbStairs(n) {
  let memo = {};

  function count(n) {
    if (n <= 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
    if (memo[n]) return memo[n];

    memo[n] = count(n - 1) + count(n - 2);
    return memo[n];
  }

  return count(n);
}
// recursive top down (memoization)
const climbStairs = (n) => {
  const memo = new Map();

  return climbStairsMemo(n, memo);
};

const climbStairsMemo = (n, memo) => {
  if (n <= 2) return n;
  if (!memo.has(n)) {
    memo.set(n, climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo));
  }

  console.log(memo);

  return memo.get(n);
};
console.log(climbStairs(5));

// // iterative bottom-up
// const climbStairs = (n) => {
//    const memo = new Array(n + 1).fill(0);
//    memo[0] = 0;
//    memo[1] = 1;
//    memo[2] = 2;
//    for(let i = 3; i <= n; i++) {
//        memo[i] = memo[i -1] + memo[i - 2];
//    }

//    return memo[n];
// };

// SIMPLER ITERATIVE
function climbStairs(n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// // iterative space-saver
// const climbStairs = (n) => {
//    if(n <= 2) return n;

//    let prev2 = 1;
//    let prev1 = 2;
//    let curr = 0;
//    for(let i = 3; i <= n; i++) {
//        curr = prev2 + prev1;
//        prev2 = prev1;
//        prev1 = curr;
//    }

//    return curr;
// }
