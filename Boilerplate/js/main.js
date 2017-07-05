
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Song = Backbone.Model.extend({
  initialize: function() {
    console.log("Song created!")
  }
});

const song = new Song();
