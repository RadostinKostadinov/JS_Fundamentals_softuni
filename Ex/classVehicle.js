class Vehicle {
    constructor(type, model, parts, fuel){
        this.type = type,
        this.model = model,
        this.parts = parts,
        this.fuel = fuel,
        this.drive = function(speed){
            console.log(speed);
        }
    }
}

let parts = {engine: 6, power: 100};
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);