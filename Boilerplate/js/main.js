
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Song = Backbone.Model.extend({
  initialize: function() {
    console.log("Song created!")
  }
});

const song = new Song({
  title: "stairway to heaven"
});

song.set("artist", "Led Zeppelin")

// cannot simply reference or set attributes, need to use set
// song.set("title", "stairway to heaven")

// can pass in an entire objct to be set

// song.set({
//   title: "stairway to heaven",
//   artist: "Led Zeppelin"
// })
