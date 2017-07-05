
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Song = Backbone.Model.extend({
  validate: function(attrs) {
    if (!attrs.title) {
      return "Title is required";
    }
  }
});

const song = new Song({
  title: "good song"
});
