class Vehicle{
    constructor(type, model, parts, fuel){
        this.type = type,
        this.model = model,
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine*parts.power
        }
        this.fuel = fuel
    }
    drive(reduce){
        this.fuel -= Number(reduce); 
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
