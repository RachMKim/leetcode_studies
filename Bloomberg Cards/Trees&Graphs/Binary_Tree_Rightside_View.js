//Binary Tree Right Side View
/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.



Example 1:
      1
    /    \
   2      3
    \       \
     5        4



Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
*/
//BFS

var rightSideView = function (root) {
  if (!root) return [];
  return bfs(root);
};

function bfs(root) {
  let q = [root];
  const res = [root.val];
  while (q.length) {
    const next = [];
    for (let node of q) {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    const last = next[next.length - 1];
    if (last) res.push(last.val);
    q = next;
  }
  return res;
}

// similar but better
var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  let size = queue.length;
  while (queue.length) {
    let updatedQueue = [];
    let lastVisisted;
    while (queue.length) {
      let cur = queue.shift();
      if (cur.left) updatedQueue.push(cur.left);
      if (cur.right) updatedQueue.push(cur.right);
      lastVisisted = cur;
    }
    res.push(lastVisisted.val);
    queue = updatedQueue;
  }
  return res;
};

//DFS

// var rightSideView = function(root) {
//      let result = []
//     dfs(root, 0)

//     function dfs(root, level) {
//         if(!root)
//             return
//         if(!result[level])
//             result.push(root.val)
//         dfs(root.right, level + 1)
//         dfs(root.left, level + 1)
//     }

//     return result
// };
