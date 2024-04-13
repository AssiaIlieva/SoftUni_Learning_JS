function furniture(arr) {
  let pattern = />>(?<product>\w+)<<(?<price>\d+\.?\d*)!(?<count>\d+)/;
  let totalSum = 0;
  console.log(`Bought furniture:`);
  for (const el of arr) {
    let result = el.match(pattern);
    if (result) {
      let product = result.groups.product;
      let price = Number(result.groups.price);
      let count = Number(result.groups.count);
      totalSum += price * count;
      console.log(product);
    }
  }
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
