"use strict";
//=====================================================================
//        Uebung 1
//=====================================================================
Object.defineProperty(exports, "__esModule", { value: true });
class vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken) {
        this.pricePerMinute = pricePerMinute;
        this.priceToUnlock = priceToUnlock;
        this.distanceTravelled = distanceTravelled;
        this.name = name;
        this.id = id;
        this.taken = taken;
    }
    getPricePerMinute() {
        return this.pricePerMinute;
    }
    getPriceToUnlock() {
        return this.priceToUnlock;
    }
    getdistanceTravelled() {
        return this.distanceTravelled;
    }
    getname() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTaken() {
        return this.taken;
    }
    setPricePerMinute(pricePerMinute) {
        this.pricePerMinute = pricePerMinute;
    }
    setPriceToUnlock(priceToUnlock) {
        this.priceToUnlock = priceToUnlock;
    }
    setDistanceTravelled(distanceTravelled) {
        this.distanceTravelled = distanceTravelled;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    settaken(taken) {
        this.taken = taken;
    }
    updateDistance(distance) {
        this.distanceTravelled = this.distanceTravelled + distance;
    }
    isAvailable() {
        return this.taken;
    }
}
;
const firstInstance = new vehicle(0.5, 1, 0, "MyVehicle", 1, false);
const car = new vehicle(10, 5, 20, "Mein Auto", 1, false);
const bike = new vehicle(15, 10, 30, "Mein Motorrad", 1, false);
const truck = new vehicle(20, 15, 150, "Mein LKW", 1, false);
console.log("Uebung 1:");
console.log(car);
console.log(car.pricePerMinute);
console.log(bike);
console.log(truck);
//=====================================================================
//        Uebung 2
//=====================================================================
console.log("Uebung 2:");
console.log("siehe getter Methoden innerh. der Klasse");
//=====================================================================
//        Uebung 3
//=====================================================================
console.log("Uebung 3:");
console.log("siehe setter Methoden innerh. der Klasse");
//=====================================================================
//        Uebung 4
//=====================================================================
console.log("Uebung 4:");
console.log("Vorher: ", car.distanceTravelled);
car.updateDistance(5);
console.log("Nachher: ", car.distanceTravelled);
console.log("Uebung 4.2:");
console.log(car.isAvailable());
class Car extends vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, fuelPercentage, kilometersLeft, brand) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.fuelPercentage = fuelPercentage;
        this.kilometersLeft = kilometersLeft;
        this.brand = brand;
    }
    getFuelStatus() {
        if (this.fuelPercentage < 15) {
            return "empty";
        }
        if (this.fuelPercentage >= 15 && this.fuelPercentage < 75) {
            return "half";
        }
        if (this.fuelPercentage > 75) {
            return "full";
        }
    }
    isAvailable() {
        if (this.fuelPercentage > 15 && this.taken === false) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Scooter extends vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, batteryPercentage, kilometersLeft, brand) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.batteryPercentage = batteryPercentage;
        this.kilometersLeft = kilometersLeft;
        this.brand = brand;
    }
    isAvailable() {
        if (this.batteryPercentage > 10 && this.taken === false) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Bike extends vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, brand, frameNumber) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.brand = brand;
        this.frameNumber = frameNumber;
    }
    isAvailable() {
        if (this.taken === false) {
            return true;
        }
        else {
            return false;
        }
    }
}
//=====================================================================
//        Uebung 7
//=====================================================================
function getAvailableVehicles(es) {
    const result = es.filter((e) => e.isAvailable());
    return result;
}
;
const firstCar = new Car(0.5, 1, 0, "MyVehicle", 1, false, 1, 50, "Marke1");
const secondCar = new Car(10, 5, 20, "Mein Auto", 1, false, 66, 55, "Marke2");
const firstBike = new Bike(15, 10, 30, "Mein Motorrad", 1, false, "Marke3", 6589796);
const secondBike = new Bike(15, 10, 30, "Mein Motorrad", 1, false, "Marke4", 2546485463);
const firstScooter = new Scooter(20, 15, 150, "Mein LKW", 1, false, 99, 90, "Marke5");
const secondScooter = new Scooter(20, 15, 150, "Mein LKW", 1, false, 5, 70, "Marke6");
console.log("Aufgabe 7:");
console.log(getAvailableVehicles([firstCar, secondCar, firstBike, secondBike, firstScooter, secondScooter]));
//# sourceMappingURL=uebungen.js.map