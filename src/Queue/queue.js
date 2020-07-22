import LinkedList from '../linked-list/linkedList';

export default class Queue {
    constructor() {
        this.queue = new LinkedList();
        this.size = 0;
    }
    enqueue(data) {
        this.queue.addToTail(data);
        this.size += 1;
        console.log(`Added ${data}! Queue size is now ${this.size}.`)
    }

    dequeue() {
        const data = this.queue.removeHead();
        this.size = this.size - 1;
        console.log(`Removed ${data} to queue! Queue size is now ${this.size}.`);
        return data;

    }
}