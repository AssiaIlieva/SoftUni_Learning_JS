
    function factory(library, orders) {
        // Резултатен масив, в който ще съхраняваме изпълнените поръчки
        const products = [];
      
        // Обхождаме всеки елемент от масива с поръчки
        for (const order of orders) {
          // Създаваме копие на темплейта от поръчката
          const product = { ...order.template };
      
          // Обхождаме всеки елемент от масива с части на поръчката
          for (const part of order.parts) {
            // Проверяваме дали библиотеката съдържа функцията
            if (library.hasOwnProperty(part)) {
              // Добавяме функцията към копието на темплейта
              product[part] = library[part];
            }
          }
      
          // Добавяме изпълнената поръчка към резултатния масив
          products.push(product);
        }

        console.log(products); console.log(products);
        return products;
      }
     

      factory({
        print: function () {
          console.log(`${this.name} is printing a page`);
        },
        scan: function () {
          console.log(`${this.name} is scanning a document`);
        },
        play: function (artist, track) {
          console.log(`${this.name} is playing '${track}' by ${artist}`);
        },
      },
      [
        {
          template: { name: 'ACME Printer'},
          parts: ['print']      
        },
        {
          template: { name: 'Initech Scanner'},
          parts: ['scan']      
        },
        {
          template: { name: 'ComTron Copier'},
          parts: ['scan', 'print']      
        },
        {
          template: { name: 'BoomBox Stereo'},
          parts: ['play']      
        }
      ]
      )
      
