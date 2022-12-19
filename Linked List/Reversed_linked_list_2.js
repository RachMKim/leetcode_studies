/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.



Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]

*/

/*
We can split this problem into 2 problems

Find where the reversal should begin (start of left)
Reverse the section between left to right
Where the reversal should begin
We need to set a pointer to the node right before the reversed section of the list. If we keep a pointer position and use the condition position<left we can traverse through the linked list and set a start pointer to the node prior to where the reversal starts.

Reverse teh section between left and right
Now that we have the node prior to where the reversal begins, we need to set a tail pointer that points to the beginning of the reversed list. Reason? Because we know the first node will be the tail of the reversedList we need that reference in order to assign its next value to whatever of the original list is left over.

Once we set the tail to the current node which is the beginning of the reversed list, we can traverse through this section with the condition position >= left && position <= right which is the portion that needs to be reversed. I highly recommend checking out the reverse linked list problem which is all the logic we need here. We simply just reverse this portion of the linkedlist and set it to reversedList.

Now because we have the start pointer before the reversal begin, all we need to do is set the starts next property to the reversedList and because the tail pointer is now set to the end of the reversedlist we can set the tail's next pointer to the current node which is the left over portion of the list.

One caveat
The reason why this ternary return statement is needed: left > 1 ? head : reversedList at the end is because if left is equal to 1 there is essentially no start value ever set. We are reversing from the beginning of the list, so we can just return the reversedList which will have the reversed portion of the list and whatever is left over.
*/

var reverseBetween = function (head, left, right) {
  let current = head,
    start = head,
    position = 1;

  while (position < left) {
    start = current;
    current = current.next;
    position++;
  }

  let reversedList = null,
    tail = current;

  while (position >= left && position <= right) {
    const next = current.next;
    current.next = reversedList;
    reversedList = current;
    current = next;
    position++;
  }
  start.next = reversedList;
  tail.next = current;

  return left > 1 ? head : reversedList;
};

var reverseBetween = function (head, m, n) {
  let dummy = new ListNode(undefined);
  let sentinel = dummy;
  sentinel.next = head;

  for (let i = 1; i < m; i++) {
    sentinel = sentinel.next;
  }

  let curr = sentinel.next;
  let next = curr.next;

  for (let i = 0; i < n - m; i++) {
    curr.next = next.next;
    next.next = sentinel.next;
    sentinel.next = next;

    next = curr.next;
  }

  return dummy.next;
};
