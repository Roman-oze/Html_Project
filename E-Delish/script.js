// Define a class for the linked list node
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Initialize an empty array of length 10
  let arr = new Array(10);
  
  // Get inputs from the user for each array element
  for (let i = 0; i < 10; i++) {
    arr[i] = prompt(`Enter element ${i + 1} of the array:`);
  }
  
  // Convert the array into a linked list
  let dummy = new ListNode();
  let currentNode = dummy;
  
  for (let i = 0; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  
  // The first node of the linked list is dummy.next
  let head = dummy.next;
  
  // Printing the linked list
  let result = "";
  let currentNodePrint = head;
  while (currentNodePrint !== null) {
    result += currentNodePrint.val + " -> ";
    currentNodePrint = currentNodePrint.next;
  }
  result += "null";
  console.log(result);
  