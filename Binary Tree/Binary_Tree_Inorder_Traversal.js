/**
 * The goal is to maintain a stack of nodes to visit as we traverse
 * down the tree. As we traverse down, We go left and push all the
 * left nodes first in the stack. Once we reach to the bottom, we
 * store the node value and traverse right.
 *           1
 *         /   \
 *        2     3    inorder traversal: 4 -> 2 -> 5 -> 1 -> 6 -> 3
 *       / \   /     (left -> root -> right)
 *      4   5 6
 */

// preorder: root left right
// inorder: left(bottom up) root right
// postorder: left(bottomup) right root

// ITERATIVE
/*Iterative In-order Traverse
Time Complexity: O(N)
Space Complexity: O(H)
 */

// var inorderTraversal = function (root) {
//   const stack = [];
//   const res = [];

//   while (root || stack.length) {
//     if (root) {
//       stack.push(root);
//       root = root.left;
//     } else {
//       root = stack.pop();
//       res.push(root.val);
//       root = root.right;
//     }
//   }

//   return res;
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// const inorderTraversal = (root) => {
//   let curr = root,
//     res = [],
//     stack = [];
//   while (curr || stack.length) {
//     while (curr) {
//       stack.push(curr);
//       curr = curr.left;
//     }
//     curr = stack.pop();
//     res.push(curr.val);
//     curr = curr.right;
//   }
//   return res;
// };

/*Recursive In-order Traverse
   Time Complexity: O(N)
   Space Complexity: O(H)
   */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// const inorderTraversal = (root) => {
//   const res = [];
//   traverse(root);
//   return res;

//   function traverse(node) {
//     if (!node) return;
//     traverse(node.left);
//     res.push(node.val);
//     traverse(node.right);
//   }
// };

/*Time Complexity:
an spread syntax takes linear time and it takes T(n/2) in this implementation
average: O(N log N)
worst: O(N^2) unbalanced tree
Space Complexity: O(H)
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
  if (!root) return [];
  const res = [];
  res.push(...inorderTraversal(root.left));
  res.push(root.val);
  res.push(...inorderTraversal(root.right));
  return res;
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

//[1, 2, 4, 5, 3, 6, 7]

console.log(inorderTraversal(tree));
