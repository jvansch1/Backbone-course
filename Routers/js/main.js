
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

let ArtistsView = Backbone.View.extend({
  render: function() {
    this.$el.html("Artists!!!");
    return this;
  }
})

let AlbumsView = Backbone.View.extend({
  render: function() {
    this.$el.html("Albums!!!");
    return this;
  }
})

let GenresView = Backbone.View.extend({
  render: function() {
    this.$el.html("Genres!!!");
    return this;
  }
})

let NavView = Backbone.View.extend({
  events: {
    "click": "onClick"
  },
  onClick: function(e) {
    let $li = $(e.target);
    router.navigate($li.attr('data-url'), { trigger: true });
  }
})

let Router = Backbone.Router.extend({
  routes: {
    "albums": "viewAlbums",
    "albums/:albumId": "viewAlbumById",
    "artists": "viewArtists",
    "genres": "viewGenres",
    "*other": "defaultRoute"
  },

  viewAlbums: function() {
    let view = new AlbumsView({ el: "#container" })
    view.render();
  },

  viewArtists: function() {
    let view = new ArtistsView({ el: "#container" })
    view.render();
  },
  viewGenres: function() {
    let view = new GenresView({ el: "#container" })
    view.render();
  },
  defaultRoute: function() {
    console.log("default")
  }
})

let navView = new NavView({ el: "#nav" })
let router = new Router();
Backbone.history.start();
