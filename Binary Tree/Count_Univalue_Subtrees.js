/*Given the root of a binary tree, return the number of uni-value subtrees.

A uni-value subtree means all nodes of the subtree have the same value.



Example 1:
      5
    /   \
   1     5
/   \     \
5   5       5
Input: root = [5,1,5,5,5,null,5]
Output: 4
Example 2:

Input: root = []
Output: 0
Example 3:

Input: root = [5,5,5,5,5,null,5]
Output: 6
*/

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
 * @return {number}
 */

/*
Approach 1: Depth First Search
Intuition

Given a node in our tree, we know that it is a univalue subtree if it meets one of the following criteria:

The node has no children (base case)
All of the node's children are univalue subtrees, and the node and its children all have the same value
With this in mind we can perform a depth-first-search on our tree, and test if each subtree is uni-value in a bottom-up manner.
*/
var countUnivalSubtrees = function (root) {
  let count = 0;

  findAllSubTrees(root);

  return count;

  function findAllSubTrees(node) {
    if (node == null) return true;

    const left = findAllSubTrees(node.left);
    const right = findAllSubTrees(node.right);

    if (!left || !right) return false;

    if (node.left != null && node.left.val != node.val) return false;
    if (node.right != null && node.right.val != node.val) return false;

    count++;
    return true;
  }
};

// let tree = {
//   val: 5,
//   left: {
//     val: 1,
//     left: { val: 5, left: null, right: null },
//     right: { val: 5, left: null, right: null },
//   },
//   right: { val: 5, left: null, right: { val: 5, left: null, right: null } },
// };

let tree = { val: 5, left: null, right: null };

console.log(countUnivalSubtrees(tree));
