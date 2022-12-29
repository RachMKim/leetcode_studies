/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
*/

//BFS (Level Order):

var maxDepth = function (root) {
  if (!root) return 0;
  // using BFS and counting levels
  // not recommended to use array as queue
  let levels = 0,
    queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let count = queue.length;

    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    levels++;
  }
  return levels;
};

//DFS (Recursion):

var maxDepth = function (root) {
  if (!root) return 0;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
};
