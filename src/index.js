import Queue from "./Queue/queue";
import DoublyLinkedList from "./doubly-linked-lists/doublyLinkedLists"

//#region DoublyLinkedList

const dll = new DoublyLinkedList();
dll.addToHead("Krati Node");
dll.addToHead("Arvind Node");

//#endregion

//#region Queue
const restaurantOrder = new Queue();
console.log(`restaurantOrder queue has ${restaurantOrder.size} orders.\n`);
restaurantOrder.enqueue('apple pie');
restaurantOrder.enqueue('roast chicken');
restaurantOrder.enqueue('quinoa salad');

//#endregion