function netherRealms(input) {
    let demons = input.split(',').map((el) => el.trim());

    let object = {};
    for (let demon of demons) {
        let health = 0;
        let damage = 0;
 
        let healthChars = demon.match(/[^\d+\-*/.]/g);
        if (healthChars) {
            health = healthChars.reduce((acc, char) => {
                acc += char.charCodeAt(0);
                return acc;
            }, 0);
        }
 
        let damageValues = demon.match(/[+-]?\d+(\.\d+)?/g);
        if (damageValues) {
            damage = damageValues.reduce((acc, value) => {
                acc += Number(value);
                return acc;
            }, 0);
 
            let actions = demon.match(/\*|\//g);
            if (actions) {
                actions.forEach((action) => {
                    if (action === '*') {
                        damage *= 2;
                    } else if (action === '/') {
                        damage /= 2;
                    }
                });
            }
        }
 
        if (!object.hasOwnProperty(demon) && demon.length != 0) {
            object[demon] = { health: health, damage: damage };
        }
    }
 
    let sorted = Object.entries(object).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });
 
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value.health} health, ${(value.damage).toFixed(2)} damage`);
    }
}
netherRealms('M3ph1st0**, Azazel')