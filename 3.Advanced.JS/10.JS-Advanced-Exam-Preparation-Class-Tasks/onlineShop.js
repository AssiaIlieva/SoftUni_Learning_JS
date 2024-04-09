class OnlineShop{
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired){
        if(this.warehouseSpace < spaceRequired){
            throw new Error('Not enough space in the warehouse.');
        }
        let newProduct = {product, quantity};
        this.warehouseSpace -= quantity;
        this.products.push(newProduct);
        return `The ${product} has been successfully delivered in the warehouse.`
    }
    quantityCheck(product, minimalQuantity){
        let productFound = this.products.find((x) => x.product === product);
        if(!productFound){
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if(minimalQuantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        if(minimalQuantity <= productFound.quantity){
            return `You have enough from product ${product}.`
        }
        if(minimalQuantity > productFound.quantity){
            let difference = minimalQuantity - productFound.quantity;
            productFound.quantity = minimalQuantity;
            return `You added ${difference} more from the ${productFound.product} products.`
        }
    }
    sellProduct(product){
        let productFound = this.products.find((x) => x.product === product);
        if(!productFound){
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        productFound.quantity -= 1;
        let productSold = {product, quantity: 1};
        this.sales.push(productSold);
        return `The ${productFound.product} has been successfully sold.`;
    }
    revision(){
        let salesCount = this.sales.length;
        if(salesCount === 0){
            throw new Error("There are no sales today!");
        }
        let result = [`You sold ${salesCount} products today!\nProducts in the warehouse:`];
        this.products.forEach(x => {
            let productName = x.product;
            let productQnty = x.quantity;
            result.push(`${productName}-${productQnty} more left`)
        })
        return result.join('\n');
    }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


 


