function listProcessor(input) {
  let collection = [];
  let processor = {
      add(string) {
        if(string !== ''){
            collection.push(string);
        }
    },
    remove(string) {
      while(collection.includes(string)){
        let index = collection.indexOf(string);
        if (index !== -1) {
          collection.splice(index, 1);
        }
      }
    },
    print() {
      if (collection.length > 0) {
        console.log(collection.join(","));
      }
    },
  };

  for (let el of input) {
    let [command, string] = el.split(" ");
    if(command === 'print'){
        processor[command];
    }
    processor[command](string);
  }
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
