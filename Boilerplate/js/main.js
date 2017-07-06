//
// const Vehicle = Backbone.Model.extend({
//   idAttribute: "registrationNumber",
//   validate: function(attrs) {
//     if (!attrs.registrationNumber) {
//       return "Must have Registration Number"
//     }
//   },
//   urlRoot: "/api/vehicles",
//   start: function() {
//     console.log("Vehicle started")
//   }
// });
//
// const Vehicles = Backbone.Collection.extend();
//
// const vehicles = new Vehicles();
//
// vehicles.add({ registrationNumber: "XLI887", color: "Blue"});
// vehicles.add({ registrationNumber: "ZNP123", color: "Blue"});
// vehicles.add({ registrationNumber: "XUV456", color: "Grey"});
//
// let blueVehicles = vehicles.where({color: "Blue"})
//
// console.log(blueVehicles);
//
// let XLI887 = vehicles.findWhere({registrationNumber: "XLI887"})
//
// console.log(XLI887);
//
// vehicles.remove(XLI887);
//
// console.log(vehicles.toJSON());
//
// vehicles.each((car) => {
//   console.log(car);
// })

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

const Song = Backbone.Model.extend();
const Songs = Backbone.Collection.extend();
const song = new Song({title: "Greatest song, best song"});



const SongView = Backbone.View.extend({
  className: "song",
  tagName: 'li',
  render: function() {
    this.$el.html(this.model.get("title") + "<button> Listen </button> <button class='bookmark'> Bookmark </button>");
    return this;
  },

  // event names and their associated handlers
  events: {
    "click": "onClick",
    "click .bookmark": "onClickBookmark"
  },

  // click hander
  onClick: function() {
    console.log(`Listening to ${this.model.get("title")}`)
  },
  onClickBookmark: function(e) {
    e.stopPropagation();
    console.log(`Bookmarked ${this.model.get("title")}`)
  }
})

const SongsView = Backbone.View.extend({
  render: function() {
    this.model.each(function(song) {
      let songView = new SongView({ model: song })
      this.$el.append(songView.render().$el);
    }.bind(this))
  }
})

const songs = new Songs([
  new Song({title: "Master of puppets"}),
  new Song({title: "Sleebard hadoo"}),
  new Song({title: "Florgy manishwatz"})
])

// #el property is the html element that will render content
// if no element is specified, a new html element will be created but not insetred into DOM
// const songView = new SongView({ el: "#songs", model: song})
const songsView = new SongsView({ el: "#songs", model: songs })
// must call render method in order for content to appear
// songView.render();
songsView.render();
