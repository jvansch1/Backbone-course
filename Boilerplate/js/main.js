
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Animal = Backbone.Model.extend({
  walk: function() {
    console.log("Animal is walking...");
  }
})

const Dog = Animal.extend({
  bark: function() {
    console.log("Barking!")
  },
  walk: function() {
    console.log("Dog is walking...")
  }
});

const dog = new Dog();

const animal = new Animal();

dog.walk();
dog.bark();
