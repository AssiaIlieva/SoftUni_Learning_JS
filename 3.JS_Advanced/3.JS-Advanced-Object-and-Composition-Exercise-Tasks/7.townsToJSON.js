    function townsToJSON(input) {
    let result = [];
    for (let i = 1; i < input.length; i++) {
        let tokens = input[i].split(/\s*\|\s*/g);
        let town = tokens[1];
        let latitude = Number(tokens[2]).toFixed(2);
        let longitude = Number(tokens[3]).toFixed(2);
        let currentObj = {
        Town: town,
        Latitude: Number(latitude),
        Longitude: Number(longitude),
        };
        result.push(currentObj);
    }
    console.log(JSON.stringify(result));
    }
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
