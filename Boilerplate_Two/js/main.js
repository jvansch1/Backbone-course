let person = {
  name: "John",
  walk: function() {
    // trigger is used to trigger events
    this.trigger("walking", {
      speed: 1,
      startTime: "8:00"
    });
  }
}

// user underscore extend to extend person to events
_.extend(person, Backbone.Events);

person.on("walking", function(e) {
  console.log("Person is walking");
  console.log(e)
})
