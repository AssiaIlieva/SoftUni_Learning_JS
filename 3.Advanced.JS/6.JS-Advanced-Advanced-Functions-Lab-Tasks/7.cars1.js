function cars(input) {
    let result = {};
    let creation = {
        create(name) {
            result[name] = {};
        },
        inherit(name1, name2) {
            result[name1] = Object.create(result[name2]);
        },
        set(name, property, string) {
            result[name][property] = string;
        },
        print(objectName) {
            let temp = [];
            for (let key in result[objectName]) {
                temp.push(`${key}:${result[objectName][key]}`);
            }
            console.log(temp.join(','));
        }
    };

    for (let line of input) {
        if (line.includes('create') && !line.includes('inherit')) {
            let [command, name] = line.split(' ');
            creation[command](name);
        }
        if (line.includes('create') && line.includes('inherit')) {
            let [command1, name1, command2, name2] = line.split(' ');
            creation[command2](name1, name2);
        }
        if (line.includes('set')) {
            let [command, name, property, string] = line.split(' ');
            creation[command](name, property, string);
        }
        if (line.includes('print')) {
            let [command, objectName] = line.split(' ');
            creation[command](objectName);
        }
    } 
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)