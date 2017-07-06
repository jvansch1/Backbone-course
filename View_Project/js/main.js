
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
    this.$el.html(vehicle.registrationNumber + " - color: " + vehicle.color);
    return this;
  }
});

const VehiclesView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    this.model.each(function(vehicle) {
      let vehicleView = new VehicleView({ model: vehicle })
      this.$el.append(vehicleView.render().$el)
    }.bind(this))
  }
})

let vehicles = new Vehicles([
  new Vehicle({ color: 'blue', registrationNumber: 'XXX123'}),
  new Vehicle({ color: 'grey', registrationNumber: 'jsdf123'}),
  new Vehicle({ color: 'green', registrationNumber: 'x8h3jl'}),
])

let vehiclesView = new VehiclesView({el: "#vehicles", model: vehicles})
vehiclesView.render();
