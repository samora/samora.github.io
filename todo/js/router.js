App.Router.map(function () {
  this.resource('todos', {path: '/'}, function () {
    this.route('active');
    this.route('completed');
  });
});

App.TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

App.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('todos');
  }
});

App.TodosActiveRoute = Ember.Route.extend({
  model: function () {
    return this.store.filter('todo', function (todo) {
      return !todo.get('isCompleted');
    });
  },

  renderTemplate: function (controller) {
    this.render('todos/index', {controller: controller});
  }
});

App.TodosCompletedRoute = Ember.Route.extend({
  model: function () {
    return this.store.filter('todo', function (todo) {
      return todo.get('isCompleted');
    });
  },

  renderTemplate: function (controller) {
    this.render('todos/index', {controller: controller});
  }
});