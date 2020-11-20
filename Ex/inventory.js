function inventory(array){
    let myArr = array.slice();
    
    let heroes = [];
    
    for (let line of myArr) {
        let currentHero = {};
        let [name, level, items] = line.split(' / ');
        currentHero.name = name;
        currentHero.level = Number(level);
        currentHero.items = items.split(', ').sort((a, b) => a.localeCompare(b));
        heroes.push(currentHero);
    }
    heroes = heroes.sort((a, b) => a.level - b.level)
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]
    );