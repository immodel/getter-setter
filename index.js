module.exports = function() {
  this.getters = [];

  this.get = function(fn) {
    return this.use(function() {
      this.getters.push(fn);
    });
  };

  this.runSetters = function(doc) {
    this.setters.forEach(function(fn) {
      value = fn.call(doc);
    });

    this.setters.reduce(function(fn) {
      return fn.call(memo);
    })

    return value;
  };

  this.runGetters = function(doc) {
    this.getters.forEach(function(fn) {
      value = fn.call(doc);
    });

    return value;
  };
};