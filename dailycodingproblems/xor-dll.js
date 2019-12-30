class XORDoublyLinkedListNode {
    value;
    currAddress;
    both;

    constructor(value, prevAddress, currAddress) {
        this.value = value;
        this.both = prevAddress;
        this.currAddress = currAddress;
    }
}

class XORDoublyLinkedList {
    // nodes = [];
    start;
    ref = new Map();
    // size = 0;
    // add(value, prevAddress, currAddress) {
    //     const newValue = new XORDoublyLinkedListNode(value, prevAddress, currAddress);
    //     this.nodes.push(newValue);
    //     return currAddress;
    // }

    add(value, prevAddress, currAddress) {
        const newValue = new XORDoublyLinkedListNode(value, prevAddress, currAddress);
        if (this.ref.size === 0) {
            this.start = newValue;
        }
        this.ref.set(currAddress, newValue);
        const prevNode = this.ref.get(prevAddress);
        if (prevNode)
            prevNode.both ^= currAddress;
        return currAddress;
    }

    traverse() {
        // return this.nodes.map(data => data.value);
        let currNode = this.start, list = [];
        let prevAddress = 0, temp = 0;
        while (currNode) {
            list.push(currNode.value);
            temp = currNode.currAddress;
            currNode = this.ref.get(prevAddress ^ currNode.both);
            prevAddress = temp;
            temp = 0;
        }
        return list;
    }

    size() {
        // return this.nodes.length;
        this.ref.size;
    }

}

function main() {
    let i = 0, currAddress = 0, prevAddress = 0;
    const xorDll = new XORDoublyLinkedList();
    while (i < 10) {
        currAddress = 100 + i;
        // currAddress = i + 1;
        prevAddress = xorDll.add(parseInt((Math.random() * 100) + 1, 10), prevAddress, currAddress);
        i++;
    }
    console.log(xorDll);
    const result = xorDll.traverse();
    if (result.length <= 0) {
        console.log('No data');
    } else {
        console.log(result.join('->'));
    }
}

main();

// (0, 1, 2), (1, 2, 2), (2, 3, 6), (3, 4, 3)