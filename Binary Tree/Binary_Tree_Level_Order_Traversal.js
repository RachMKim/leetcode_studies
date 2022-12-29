/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []

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
 * @return {number[][]}
 */

// ITERATIVE

// var levelOrder = function(root) {
//    // If root is null return an empty array
//     if(!root) return []

//     const queue = [root] // initialize the queue with root
//     const levels = [] // declare output array

//     while(queue.length !== 0){
//        const queueLength = queue.length // Get the length prior to dequeueing
//        const currLevel = [] // Declare this level
//        // loop through to exhaust all options and only to include nodes at currLevel
//        for(let i = 0; i < queueLength; i++){
//            // Get next node
//            const current = queue.shift()

//            if(current.left){
//                queue.push(current.left)
//            }
//            if(current.right){
//                queue.push(current.right)
//            }
//            // After we add left and right for current, we add to currLevel
//            currLevel.push(current.val)
//        }
//        // Level has been finished. Push into output array
//        levels.push(currLevel)
//    }
//     return levels
// };

// RECURSIVE
var levelOrder = function (root) {
  var result = [];
  var level = 0;
  traverse(root, level);
  return result;

  function traverse(root, level) {
    if (root === null) {
      return;
    } else {
      if (level >= result.length) {
        result[level] = [];
      }
      result[level].push(root.val);
      traverse(root.left, level + 1);
      traverse(root.right, level + 1);
    }
  }
};

/*
  OLD GROKKING SOLUTION

  class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/*
      12,
  7         1
9           10  5
1. start by pushing the root note to queue
2. keep iterating the queue while there is something in the queue
3. in each iteration, count the elements in the queue(levelsize). that levelsize count will tell how many nodes in the curreent level
4. remove the level from the queue and push the valiues in the array to represent the current level
in order to do so we need to shift it and store that (currentNode)
5. after removing each node from the queue, insert both of the children (if it is there) into the queue
6. if the queue is empty, repeate from steps 3 to end for next level
*/

/*
const traverse = function(root) {
  let result = []
  if (root === null){
    return result
  }

  let queue = []
  queue.push(root)

  while(queue.length > 0){
    let currentLevel = []
    let levelLength = queue.length

    for (let i = 0; i < levelLength; i++){
      let currentNode = queue.shift()
      currentLevel.push(currentNode.val)

      if (currentNode.left !== null){
        queue.push(currentNode.left)
      }

      if (currentNode.right !== null){
        queue.push(currentNode.right)
      }
    }
    result.push(currentLevel)

  }

  return result

};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
 */
