//
const Vehicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",
  validate: function(attrs) {
    if (!attrs.registrationNumber) {
      return "Must have Registration Number"
    }
  },
  urlRoot: "/api/vehicles",
  start: function() {
    console.log("Vehicle started")
  }
});

const Vehicles = Backbone.Collection.extend();

const vehicles = new Vehicles();

vehicles.add({ registrationNumber: "XLI887", color: "Blue"});
vehicles.add({ registrationNumber: "ZNP123", color: "Blue"});
vehicles.add({ registrationNumber: "XUV456", color: "Grey"});

let blueVehicles = vehicles.where({color: "Blue"})

console.log(blueVehicles);

let XLI887 = vehicles.findWhere({registrationNumber: "XLI887"})

console.log(XLI887);

vehicles.remove(XLI887);

console.log(vehicles.toJSON());

vehicles.each((car) => {
  console.log(car);
})

//
// const Car = Vehicle.extend({
//   start: function() {
//     console.log(`Car with number ${this.get("registrationNumber")} started`)
//   }
// });
//
// const car = new Car({registrationNumber: "XLI887", color: "Blue"})
//
// if (!car.isValid()) {
//   console.log(car.validationError)
// }
//
// // car.set("registrationNumber", "XLI887")
//
// if (!car.isValid()) {
//   console.log(car.validationError)
// }
//
// car.start();
