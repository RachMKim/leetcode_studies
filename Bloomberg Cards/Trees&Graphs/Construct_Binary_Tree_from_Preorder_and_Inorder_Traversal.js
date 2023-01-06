/*Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.



Example 1:
      3
     / \
    9   20
        / \
       15  7


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
*/

/*The basic idea is: from the preorder array, we know that the value of the root node is the first element, since the inorder array doesn't contain duplicate values, from the inorder array, we can find out the index of the root value, with this index, we can calculate how many nodes are there in the left and right subtrees, based on these information we can recursively rebuild the whole tree.

For example, we have this tree below:

            1
           / \
          2   3
         / \   \
        4   5   6
the preorder and inorder arrays are:

preorder: 1 2 4 5 3 6
inorder: 4 2 5 1 3 6

let's group the left nodes with ( ) and right nodes with [ ]:

preorder: 1 (2 4 5) [3 6]
inorder: (4 2 5) 1 [3 6]

we can then build the left subtree using the following preorder and inorder arrays:

preorder: 2 4 5
inorder: 4 2 5

and for the right subtree:

preorder: 3 6
inorder: 3 6

Following is the JavaScript code:
*/

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function helper(p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) return null; // sanity check

    var value = preorder[p1], // get the root value
      index = inorder.indexOf(value), // get inorder position
      nLeft = index - i1, // count nodes in left subtree
      root = new TreeNode(value); // build the root node

    // build the left and right subtrees recursively
    root.left = helper(p1 + 1, p1 + nLeft, i1, index - 1);
    root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
// Noted that I use indexOf, this increases the time complexity, ideally we should cache the positions of the elements in the inorder array, but for the sake of simplicity, indexOf should be fine.

//Same solution with cache for inorder index lookup.

var buildTree = function (preorder, inorder) {
  let inOrderIndexLookup = new Map();

  //since inorder does not contain duplicates, we will have one entry for each node;
  for (let i = 0, len = inorder.length; i < len; i++) {
    inOrderIndexLookup.set(inorder[i], i);
  }

  function helper(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;

    let value = preorder[preStart];
    let index = inOrderIndexLookup.get(value);
    let leftTreeNodeCount = index - inStart;
    let root = new TreeNode(value);

    root.left = helper(
      preStart + 1,
      preStart + leftTreeNodeCount,
      inStart,
      index - 1
    );
    root.right = helper(
      preStart + leftTreeNodeCount + 1,
      preEnd,
      index + 1,
      inEnd
    );
    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
