(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var sayHello = require('./say-hello');
var sayHi    = require('./say-hi');

sayHello();
sayHi();
},{"./say-hello":2,"./say-hi":3}],2:[function(require,module,exports){
module.exports = function(){
  console.log('Hello!');
};
},{}],3:[function(require,module,exports){
module.exports = function(){
  console.log('Hi!');
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvdWdvL1JlcG9zL2d1bHAtc3RhcnRlci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3Vnby9SZXBvcy9ndWxwLXN0YXJ0ZXIvc3JjL2pzL2FwcC5qcyIsIi9Vc2Vycy91Z28vUmVwb3MvZ3VscC1zdGFydGVyL3NyYy9qcy9zYXktaGVsbG8uanMiLCIvVXNlcnMvdWdvL1JlcG9zL2d1bHAtc3RhcnRlci9zcmMvanMvc2F5LWhpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgc2F5SGVsbG8gPSByZXF1aXJlKCcuL3NheS1oZWxsbycpO1xudmFyIHNheUhpICAgID0gcmVxdWlyZSgnLi9zYXktaGknKTtcblxuc2F5SGVsbG8oKTtcbnNheUhpKCk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICBjb25zb2xlLmxvZygnSGVsbG8hJyk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2coJ0hpIScpO1xufTsiXX0=
