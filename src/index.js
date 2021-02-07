import Queue from "./Queue/queue";
import DoublyLinkedList from "./doubly-linked-lists/doublyLinkedLists"

//#region DoublyLinkedList

const dll = new DoublyLinkedList();
dll.addToHead("Krati Node");
dll.addToHead("Arvind Node");

//#endregion

//#region Queue
const restaurantOrder = new Queue();
restaurantOrder.enqueue('apple pie');
restaurantOrder.enqueue('roast chicken');
restaurantOrder.enqueue('quinoa salad');
console.log('\nFood preparing...\n')
restaurantOrder.dequeue();
restaurantOrder.dequeue();
restaurantOrder.dequeue();
console.log('All orders ready!')


//#endregion