App.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

// App.Todo.FIXTURES = [
//   {
//     id: 1, 
//     title: 'Be a model citizen.',
//     isCompleted: true
//   },

//   {
//     id: 2,
//     title: 'Make the world a better place.',
//     isCompleted: false
//   }
// ];