class XORDoublyLinkedListNode {
    value;
    both;
    currAddress;

    constructor(value, prevAddress, currAddress) {
        this.value = value;
        this.both = prevAddress;
        this.currAddress = currAddress;
    }
}

class XORDoublyLinkedList {
    nodes = [];
    size = 0;
    add(value, prevAddress, currAddress) {
        const newValue = new XORDoublyLinkedListNode(value, prevAddress, currAddress);
        this.nodes.push(newValue);
        return currAddress;
    }

    traverse() {
        return this.nodes.map(data => data.value);
    }

    size() {
        return this.nodes.length;
    }

}

function main() {
    let i = 0, currAddress = 0, prevAddress = null;
    const xorDll = new XORDoublyLinkedList();
    while (i < 10) {
        currAddress = 100 + i;
        // currAddress = i + 1;
        prevAddress = xorDll.add(parseInt((Math.random() * 100) + 1, 10), prevAddress || -1, currAddress);
        i++;
    }
    const result = xorDll.traverse();
    if (result.length <= 0) {
        console.log('No data');
    } else {
        console.log(result.join('->'));
    }
}

main();

// (0, 1, 2), (1, 2, 2), (2, 3, 6), (3, 4, 3)