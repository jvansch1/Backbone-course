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

const Song = Backbone.Model.extend({
  defaults: {
    listeners: 0
  }
});

const Songs = Backbone.Collection.extend();
const song = new Song({title: "Greatest song, best song"});

const SongView = Backbone.View.extend({
  tagName: "li",
  // in initialize method, force view to re-render when model updates
  // initialize: function() {
  //   this.model.on("change", this.render, this)
  // },
  render: function() {
    this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
    this.$el.attr("id", this.model.id);
    return this;
  }
})

// const SongView = Backbone.View.extend({
//   className: "song",
//   tagName: 'li',
//   render: function() {
//     this.$el.html(this.model.get("title") + "<button> Listen </button> <button class='bookmark'> Bookmark </button>");
//     return this;
//   },
//
//   // event names and their associated handlers
//   events: {
//     "click": "onClick",
//     "click .bookmark": "onClickBookmark"
//   },
//
//   // click hander
//   onClick: function() {
//     console.log(`Listening to ${this.model.get("title")}`)
//   },
//   onClickBookmark: function(e) {
//     e.stopPropagation();
//     console.log(`Bookmarked ${this.model.get("title")}`)
//   }
// })

const SongsView = Backbone.View.extend({
  tagName: "ul",
  initialize: function() {
    this.model.on("add", this.onSongAdded, this)
    this.model.on("remove", this.onSongRemoved, this)
  },
  onSongAdded: function(song) {
    let songView = new SongView({ model: song })
    this.$el.append(songView.render().$el)
  },
  onSongRemoved: function(song) {
    console.log(this.$("#li" + song.id))
    this.$("li#" + song.id).remove();
  },

  render: function() {
    this.model.each(function(song) {
      let songView = new SongView({ model: song })
      this.$el.append(songView.render().$el);
    }.bind(this))
  }
})

const songs = new Songs([
  new Song({title: "Master of puppets", id: 1}),
  new Song({title: "Sleebard hadoo", id: 2}),
  new Song({title: "Florgy manishwatz", id: 3})
])

// #el property is the html element that will render content
// if no element is specified, a new html element will be created but not insetred into DOM
// const songView = new SongView({ el: "#songs", model: song})
const songsView = new SongsView({ el: "#songs", model: songs })
// must call render method in order for content to appear
// songView.render();
songsView.render();
