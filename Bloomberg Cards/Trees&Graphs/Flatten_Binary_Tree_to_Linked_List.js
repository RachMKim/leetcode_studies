/*
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.


Example 1:


Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [0]
Output: [0]
*/

function flatten(root) {
  if (root == null) return;

  let current = root;
  while (current != null) {
    if (current.left != null) {
      let last = current.left;
      while (last.right != null) {
        last = last.right;
      }

      last.right = current.right;
      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
  return root;
}

var flatten = function (root) {
  // right, left, root -> postorder dfs
  // set left child to null & set right child to the previous node
  let prev = null;
  const traverse = (node) => {
    if (node === null) {
      return;
    }

    traverse(node.right);
    traverse(node.left);

    // task
    node.left = null;
    node.right = prev;
    prev = node;
  };

  traverse(root);
};

const flatten = (root) => {
  const list = [];
  helper(root, list);

  if (list.length === 0) return;

  for (let i = 0; i < list.length - 1; i++) {
    const node = list[i];
    node.left = null;
    node.right = list[i + 1];
  }

  const lastNode = list[list.length - 1];
  lastNode.left = null;
  lastNode.right = null;
};

const helper = (node, list) => {
  if (!node) return;

  list.push(node);
  helper(node.left, list);
  helper(node.right, list);
};
