
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

const Car = Vehicle.extend({
  start: function() {
    console.log(`Car with number ${this.get("registrationNumber")} started`)
  }
});

const car = new Car({registrationNumber: "XLI887", color: "Blue"})

if (!car.isValid()) {
  console.log(car.validationError)
}

// car.set("registrationNumber", "XLI887")

if (!car.isValid()) {
  console.log(car.validationError)
}

car.start();
