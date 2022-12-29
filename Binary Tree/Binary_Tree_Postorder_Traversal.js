/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// RECURSIVE
// var postorderTraversal = function(root) {
//     let res = []
//     if (!root) return res;
//     res.push(...postorderTraversal(root.left))
//     res.push(...postorderTraversal(root.right))
//     res.push(root.val)

//     return res
// };

// RECURSIVE - ES6
// var postorderTraversal = function(root) {
//    return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : []
// };

// ITERATIVE - very similar to preorder - but we unshift the val to the stack so the root can be at the end
var postorderTraversal = function (root) {
  if (!root) return [];

  var result = [],
    stack = [root];

  while (stack.length) {
    var node = stack.pop();
    // insert the node val to the front
    result.unshift(node.val);

    if (node.left) {
      stack.push(node.left); // left first
    }
    if (node.right) {
      stack.push(node.right); // then right
    }
  }

  return result;
};

// stack version
var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  let ans = [];
  let stack = [];
  cur = root;
  pre = null;
  while (cur || stack.length) {
    // step 1
    // move along the left edges as far as we can
    if (cur) {
      stack.push(cur);
      cur = cur.left;
      continue;
    }

    // step 2
    // if the node is the parent of any right chid-node
    let last = stack[stack.length - 1];
    if (last.right && last.right != pre) {
      cur = last.right;
      continue;
    }

    // step 3
    // most left / right nodes will be processed here first
    // then parents nodes
    ans.push(last.val);

    // marked this node as processed
    // so it's parent cannot add it again from the step 2
    pre = stack.pop();
  }

  return ans;
};
// tree:
//     1
//   2   3
// 4  5 6  7

let tree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

//[1,2,4,5,3,6,7]

console.log(postorderTraversal(tree));
