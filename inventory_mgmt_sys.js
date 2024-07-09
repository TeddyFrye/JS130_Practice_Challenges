class Item {
  constructor(name, category, quantity) {
    this.name = this.validateName(name);
    this.category = this.validateCategory(category);
    this.quantity = this.validateQuantity(quantity);
    this.sku = this.generateSKU(name, category);
  }

  validateName(name) {
    let nameWithoutSpaces = name.split(` `).join(``);
    if (nameWithoutSpaces.length >= 5) {
      return name;
    } else {
      return "Invalid";
    }
  }

  validateCategory(category) {
    if (category.includes(" ") || category.length < 5) {
      return "Invalid";
    } else {
      return category;
    }
  }

  validateQuantity(quantity) {
    if (typeof quantity === "number" && quantity >= 0) {
      return quantity;
    } else {
      return "Invalid";
    }
  }

  generateSKU(name, category) {
    let newSKU = "";
    if (name.includes(` `) && name[2] === " ") {
      let nameArr = name.split(" ");
      newSKU = nameArr[0] + nameArr[1].slice(0, 1) + category.slice(0, 2);
    } else {
      newSKU = name.slice(0, 3) + category.slice(0, 2);
    }
    return newSKU.toLowerCase();
  }
}

const ItemManager = {
  items: [],

  create(name, category, quantity) {
    let item = new Item(name, category, quantity);
    if (
      item.name === "Invalid" ||
      item.category === "Invalid" ||
      item.quantity === "Invalid"
    ) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(skuCode, properties) {
    let itemToUpdate = this.items.find(
      (item) => item.sku === skuCode.toLowerCase()
    );
    if (itemToUpdate) {
      itemToUpdate.quantity = properties.quantity;
      return itemToUpdate;
    } else {
      console.log(`Item with ${skuCode} not found`);
      return null;
    }
  },
  inStock() {
    return this.items.filter((item) => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter((item) => item.category === category);
  },

  delete(skuCode) {
    this.items = this.items.filter(
      (item) => item.sku !== skuCode.toLowerCase()
    );
  },
};

const ReportManager = {
  items: [],

  init(manager) {
    this.items = manager.items;
    return this.items;
  },

  reportInStock() {
    let inStockItems = this.items
      .filter((item) => item.quantity > 0)
      .map((item) => item.name);
    console.log(`In Stock: ` + inStockItems.join(`, `));
  },

  createReporter(skuCode) {
    let item = this.items.find((item) => item.sku === skuCode.toLowerCase());
    return {
      itemInfo: () => {
        if (item) {
          console.log(
            `skuCode: ${item.sku}, itemName: ${item.name}, category: ${item.category}, quantity: ${item.quantity}`
          );
        } else {
          console.log(`Item with SKU ${skuCode} not found.`);
        }
      },
    };
  },
};

// TEST CODE
ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item
// returns list with the 4 valid items

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

console.log(ItemManager.update("SOCSP", { quantity: 0 }));
// // returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());

// // football,kitchen pot
ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory("sports");

ItemManager.delete("SOCSP");
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
