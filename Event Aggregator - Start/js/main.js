
var Venue = Backbone.Model.extend();

var Venues = Backbone.Collection.extend({
	model: Venue
});

var VenueView = Backbone.View.extend({
	tagName: "li",

	events: {
		"click": "onClick",
	},

	initialize: function(options) {
		this.bus = options.bus
	},

	onClick: function(){
		// whenever a venue is clicked, send this event to the bus with the model as data
		this.bus.trigger("venueSelected", this.model)
	},

	render: function(){
		this.$el.html(this.model.get("name"));

		return this;
	}
});

var VenuesView = Backbone.View.extend({
	tagName: "ul",

	id: "venues",

	initialize: function(options) {
		this.bus = options.bus
	},

	render: function(){
		var self = this;

		this.model.each(function(venue){
			var view = new VenueView({ model: venue, bus: self.bus });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});

var MapView = Backbone.View.extend({
	el: "#map-container",

	initialize: function(options) {
		this.bus = options.bus
		// whenever the venueSelected event is triggerd, call onVenueSelected function
		this.bus.on("venueSelected", this.onVenueSelected, this);
	},
	onVenueSelected: function(venue) {
		// set model value == to venue
		// rneder only works if there is a model
		this.model = venue
		// re-render
		this.render();
	},
	render: function(){
		if (this.model)
			this.$("#venue-name").html(this.model.get("name"));

		return this;
	}
})

// create an empty object which extends Backbone events
// pass this to each of the views
let bus = _.extend({}, Backbone.Events)

var venues = new Venues([
	new Venue({ name: "30 Mill Espresso" }),
	new Venue({ name: "Platform Espresso" }),
	new Venue({ name: "Mr Foxx" })
	]);

var venuesView = new VenuesView({ model: venues, bus: bus});
$("#venues-container").html(venuesView.render().$el);

var mapView = new MapView({bus: bus});
mapView.render();
