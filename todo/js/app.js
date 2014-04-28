window.App = Ember.Application.create();

// Use fixtures
// App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Use local storage
App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'baba-todos'
});