/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).



Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/
// var fib = function (n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// };

// iterative solution
// time - O(n) - 48ms
// space - O(1)

const fib = (N) => {
  let arr = [0, 1];

  for (let i = 2; i <= N; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[N];
};

// OR //
function fibIterative(n) {
  if (n === 0) return 0;

  let prevPrev = 0;
  let prev = 1;
  n -= 1;

  while (n > 0) {
    let current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
    n--;
  }

  return prev;
}
// DP iterative solution w/ memoization (bottom up)
// time - O(n) - 48ms
// space - O(1)

const fib = (N) => {
  const memo = {};
  for (let i = 0; i <= N; i++) {
    if (i < 2) memo[i] = i;
    else memo[i] = memo[i - 2] + memo[i - 1];
  }
  return memo[N];
};
// recursive solution
// time - O(2^n) - 100ms
// space - O(n)

const fib = (N) => {
  return N < 2 ? N : fib(N - 2) + fib(N - 1);
};
// DP recursive solution w/ memoization
// time - O(n) - 52ms
// space - O(n)

const fib = (N) => {
  const memo = {};
  return fibRec(N, memo);
};

const fibRec = (N, memo) => {
  if (memo[N]) return memo[N];
  else {
    if (N < 2) return N;
    else {
      memo[N] = fibRec(N - 1, memo) + fibRec(N - 2, memo);
      return memo[N];
    }
  }
};
// DP recursive solution w/ memoization (simpler)
// time - O(n) - 52ms
// space - O(n)

const fib = (N, memo) => {
  memo = memo || {};

  if (memo[N]) return memo[N];
  if (N < 2) return N;

  return (memo[N] = fib(N - 1, memo) + fib(N - 2, memo));
};
// DP recursive solution w/ memoization (using new Map())
// time - O(n) - 48ms
// space - O(n)

const fib = (N, memo) => {
  memo = memo || new Map();

  if (memo.has(N)) return memo.get(N);
  if (N < 2) return N;

  memo.set(N, fib(N - 1, memo) + fib(N - 2, memo));
  return memo.get(N);
};

/*Let's get 5 as an example,
For fib(5) we need fib(4) + fib(3)
for fib(4) we need fib(3) + fib(2) and for fib(3) (from above) we need fib(2)+fib(1)

Look at above. For instance, we have already encountered 3 times to fib(3) in 2 steps.
Do we need to calculate it again and again?
No.
Once you store fib(3) in a map you would not have to calculate it again and again.

*/

var fib = function (N) {
  var memo = {};
  var helper = (x) => {
    if (memo[x]) return memo[x];
    if (x == 1 || x == 0) return x;
    return (memo[x] = helper(x - 1) + helper(x - 2));
  };
  return helper(N);
};
// other way
var fib = function (n) {
  let hash = new Map();
  if (hash.has(n)) {
    return hash.get(n);
  }
  if (n < 2) {
    return n;
  }
  hash.set(n, fib(n - 1) + fib(n - 2));
  return hash.get(n);
};
