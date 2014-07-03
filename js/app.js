(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// disable non youtube links
var links = document.querySelectorAll('a');
var linksLength = links.length;
var linkBehavior = function(e){
  var isExternalLink = this.attributes.target.nodeValue == "_blank";
  if(!isExternalLink)
    e.preventDefault();
};

for(i=0; i<linksLength; i++){
  links[i].addEventListener('click', linkBehavior);
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvdWdvL1JlcG9zL2phcnJpbmcvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy91Z28vUmVwb3MvamFycmluZy9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBkaXNhYmxlIG5vbiB5b3V0dWJlIGxpbmtzXG52YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG52YXIgbGlua3NMZW5ndGggPSBsaW5rcy5sZW5ndGg7XG52YXIgbGlua0JlaGF2aW9yID0gZnVuY3Rpb24oZSl7XG4gIHZhciBpc0V4dGVybmFsTGluayA9IHRoaXMuYXR0cmlidXRlcy50YXJnZXQubm9kZVZhbHVlID09IFwiX2JsYW5rXCI7XG4gIGlmKCFpc0V4dGVybmFsTGluaylcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5mb3IoaT0wOyBpPGxpbmtzTGVuZ3RoOyBpKyspe1xuICBsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpbmtCZWhhdmlvcik7XG59Il19
