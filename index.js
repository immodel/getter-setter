module.exports = function() {
  this.getters = [];
  this.setters = [];
  
  this.set = function(fn) {
    return this.use(function() {
      this.setters.push(fn);
    });    
  };
   
  this.get = function(fn) {
    return this.use(function() {
      this.getters.push(fn);
    });
  };
  
  this.runSetters = function(value, context) {
    var self = this;
    this.setters.forEach(function(fn) {
      value = fn.call(context, value, self);
    });
    
    return value;
  };

  this.runGetters = function(value, context) {
    var self = this;
    this.getters.forEach(function(fn) {
      value = fn.call(context, value, self);
    });
    
    return value;
  };
};