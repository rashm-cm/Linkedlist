class Item {
    constructor(itemName, float_price) {
        this.itemName = itemName;
        this.float_price = float_price;
    }
}

class Operations {
    display(data) {
        console.log(data.itemName);
        console.log(data.float_price);
    }
}

const item = new Item("Salt",59);
const operations = new Operations();

operations.display(item);