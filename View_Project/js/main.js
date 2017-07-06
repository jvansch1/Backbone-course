
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Vehicle = Backbone.Model.extend({
  idAttribute: 'registrationNumber'
});

const Vehicles = Backbone.Collection.extend();

const VehicleView = Backbone.View.extend({
  tagName: 'li',
  render: function() {
    let vehicle = this.model.attributes
    this.$el.html(vehicle.registrationNumber + " - color: " + vehicle.color + "<button class='delete-button'>Delete</button>");
    this.$el.attr("id", vehicle.id)
    this.$el.attr("data-color", vehicle.color)
    return this;
  }
});

let bus = _.extend({}, Backbone.Events)

const NewVehicleView = Backbone.View.extend({
  initialize: function(options) {
    this.bus = options.bus
  },
  events: {
    "click #add-button": "addCar"
  },
  addCar: function() {
    let id = $("#text-field")[0].value;
    let newVehicle = new Vehicle({ registrationNumber: id, color: 'Grey'})
    this.bus.trigger("addCar", newVehicle)
  },
  render: function() {
    this.$el.html("<input type='text' id='text-field'></input><button id='add-button'>Add</button>")
  }
})

const VehiclesView = Backbone.View.extend({
  tagName: 'ul',
  events: {
    "click .delete-button": "removeVehicle"
  },
  initialize: function(options) {
    this.bus = options.bus
    this.bus.on("addCar", this.addCar, this)
  },
  addCar: function(e) {
    console.log(e)
    let newVehicleView = new VehicleView({ model: e, registrationNumber: e.attributes.registrationNumber, color: e.attributes.color })
    console.log(newVehicleView)
    this.$el.append(newVehicleView.render().$el)
  },
  removeVehicle: function(e) {
    $(e.currentTarget).parent().remove();
  },
  render: function() {
    this.model.each(function(vehicle) {
      let vehicleView = new VehicleView({ model: vehicle, bus: self.bus})
      this.$el.append(vehicleView.render().$el)
    }.bind(this))
  }
})

let vehicles = new Vehicles([
  new Vehicle({ color: 'blue', registrationNumber: 'XXX123', id: 1}),
  new Vehicle({ color: 'grey', registrationNumber: 'jsdf123', id: 2}),
  new Vehicle({ color: 'green', registrationNumber: 'x8h3jl', id: 3}),
])
let newVehicleView = new NewVehicleView({ el: "#entry", bus: bus })
newVehicleView.render();
let vehiclesView = new VehiclesView({ el: "#vehicles", model: vehicles, bus: bus })
vehiclesView.render();
