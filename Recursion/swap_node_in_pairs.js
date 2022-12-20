/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
*/

/*Check if we have current and next Node or not.
Do simple swapping using temp variable.
Take a temporary variable and store value of first node into that.
Take value of second node and store in first node
Move to second node and replace value of second node by temp.
repeat the swapping till end of linked list.

*/

//Definition for singly-linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// solving using pointers
// var swapPairs = function (head) {
//   // let start = new ListNode(); // Taking a pointer for keeping head of linked list safe with us
//   let start = head; // storing head into result as we'll be updating head further.
//   while (head && head.next) {
//     //loop for itterating through linked list
//     let temp = head.val; // swapping
//     head.val = head.next.val; // swapping
//     head = head.next; // swapping
//     head.val = temp; // swapping
//     head = head.next; // increasing the pointer to next element
//   }
//   return start; // return the starting point of linked list as we modified the same linked list.
// };

//  solving the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
function swapPairs(head) {
  // Dummy node acts as the prevNode for the head node
  // of the list and hence stores pointer to the head node.
  let dummy = new ListNode(-1);
  dummy.next = head;

  let prevNode = dummy;

  while (head && head.next) {
    // Nodes to be swapped
    let firstNode = head;
    let secondNode = head.next;

    // Swapping
    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    // Reinitializing the head and prevNode for next swap
    prevNode = firstNode;
    head = firstNode.next; // jump
  }

  // Return the new head node.
  return dummy.next;
}

//recursive

// var swapPairs = function (head) {
//   // base case
//   if (head === null || head.next === null) return head;
//   let temp = head.next;
//   head.next = temp.next;
//   temp.next = head;
//   head.next = swapPairs(head.next);
//   return temp;
// };

let head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
};
console.log(swapPairs(head));
