(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

    const namespace = require('../package.json')['open-chat-framework']['namespace'];
    window.OpenChatFramework.plugin[namespace] = require('../plugin.js');

})();

},{"../package.json":2,"../plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "name": "ocf-random-username",
  "version": "0.0.1",
  "main": "./plugin.js",
  "open-chat-framework": {
    "namespace": "random-username"
  }
}

},{}],3:[function(require,module,exports){
var randomName = () => {

    // list of friendly animals
    let animals = ['pigeon', 'seagull', 'bat', 'owl', 'sparrows', 'robin', 'bluebird', 'cardinal', 'hawk', 'fish', 'shrimp', 'frog', 'whale', 'shark', 'eel', 'seal', 'lobster', 'octopus', 'mole', 'shrew', 'rabbit', 'chipmunk', 'armadillo', 'dog', 'cat', 'lynx', 'mouse', 'lion', 'moose', 'horse', 'deer', 'raccoon', 'zebra', 'goat', 'cow', 'pig', 'tiger', 'wolf', 'pony', 'antelope', 'buffalo', 'camel', 'donkey', 'elk', 'fox', 'monkey', 'gazelle', 'impala', 'jaguar', 'leopard', 'lemur', 'yak', 'elephant', 'giraffe', 'hippopotamus', 'rhinoceros', 'grizzlybear'];
    
    // list of friendly colors
    let colors = ['silver', 'gray', 'black', 'red', 'maroon', 'olive', 'lime', 'green', 'teal', 'blue', 'navy', 'fuchsia', 'purple'];

    // randomly generate a combo of the two and return it
    return colors[Math.floor(Math.random() * colors.length)] + '_' + animals[Math.floor(Math.random() * animals.length)];

}

module.exports = (config) => {
    
    var plugin = (chat) => {

        // define send middleware
        class extension {
            construct () {

                let state = this.parent.state(chat);

                state.username = randomName();

                this.parent.update(state, chat);
            }

        };

        // define both the extended methods and the middleware in our plugin
        return {
            extends: {
                Me: extension
            }
        }

    }

}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni43LjAvbGliL25vZGVfbW9kdWxlcy9vY2YtcGx1Z2luL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wL3dyYXAuanMiLCJwYWNrYWdlLmpzb24iLCJwbHVnaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBuYW1lc3BhY2UgPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKVsnb3Blbi1jaGF0LWZyYW1ld29yayddWyduYW1lc3BhY2UnXTtcbiAgICB3aW5kb3cuT3BlbkNoYXRGcmFtZXdvcmsucGx1Z2luW25hbWVzcGFjZV0gPSByZXF1aXJlKCcuLi9wbHVnaW4uanMnKTtcblxufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwib2NmLXJhbmRvbS11c2VybmFtZVwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcIm1haW5cIjogXCIuL3BsdWdpbi5qc1wiLFxuICBcIm9wZW4tY2hhdC1mcmFtZXdvcmtcIjoge1xuICAgIFwibmFtZXNwYWNlXCI6IFwicmFuZG9tLXVzZXJuYW1lXCJcbiAgfVxufVxuIiwidmFyIHJhbmRvbU5hbWUgPSAoKSA9PiB7XG5cbiAgICAvLyBsaXN0IG9mIGZyaWVuZGx5IGFuaW1hbHNcbiAgICBsZXQgYW5pbWFscyA9IFsncGlnZW9uJywgJ3NlYWd1bGwnLCAnYmF0JywgJ293bCcsICdzcGFycm93cycsICdyb2JpbicsICdibHVlYmlyZCcsICdjYXJkaW5hbCcsICdoYXdrJywgJ2Zpc2gnLCAnc2hyaW1wJywgJ2Zyb2cnLCAnd2hhbGUnLCAnc2hhcmsnLCAnZWVsJywgJ3NlYWwnLCAnbG9ic3RlcicsICdvY3RvcHVzJywgJ21vbGUnLCAnc2hyZXcnLCAncmFiYml0JywgJ2NoaXBtdW5rJywgJ2FybWFkaWxsbycsICdkb2cnLCAnY2F0JywgJ2x5bngnLCAnbW91c2UnLCAnbGlvbicsICdtb29zZScsICdob3JzZScsICdkZWVyJywgJ3JhY2Nvb24nLCAnemVicmEnLCAnZ29hdCcsICdjb3cnLCAncGlnJywgJ3RpZ2VyJywgJ3dvbGYnLCAncG9ueScsICdhbnRlbG9wZScsICdidWZmYWxvJywgJ2NhbWVsJywgJ2RvbmtleScsICdlbGsnLCAnZm94JywgJ21vbmtleScsICdnYXplbGxlJywgJ2ltcGFsYScsICdqYWd1YXInLCAnbGVvcGFyZCcsICdsZW11cicsICd5YWsnLCAnZWxlcGhhbnQnLCAnZ2lyYWZmZScsICdoaXBwb3BvdGFtdXMnLCAncmhpbm9jZXJvcycsICdncml6emx5YmVhciddO1xuICAgIFxuICAgIC8vIGxpc3Qgb2YgZnJpZW5kbHkgY29sb3JzXG4gICAgbGV0IGNvbG9ycyA9IFsnc2lsdmVyJywgJ2dyYXknLCAnYmxhY2snLCAncmVkJywgJ21hcm9vbicsICdvbGl2ZScsICdsaW1lJywgJ2dyZWVuJywgJ3RlYWwnLCAnYmx1ZScsICduYXZ5JywgJ2Z1Y2hzaWEnLCAncHVycGxlJ107XG5cbiAgICAvLyByYW5kb21seSBnZW5lcmF0ZSBhIGNvbWJvIG9mIHRoZSB0d28gYW5kIHJldHVybiBpdFxuICAgIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldICsgJ18nICsgYW5pbWFsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbmltYWxzLmxlbmd0aCldO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gKGNvbmZpZykgPT4ge1xuICAgIFxuICAgIHZhciBwbHVnaW4gPSAoY2hhdCkgPT4ge1xuXG4gICAgICAgIC8vIGRlZmluZSBzZW5kIG1pZGRsZXdhcmVcbiAgICAgICAgY2xhc3MgZXh0ZW5zaW9uIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdCAoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnBhcmVudC5zdGF0ZShjaGF0KTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gcmFuZG9tTmFtZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQudXBkYXRlKHN0YXRlLCBjaGF0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGRlZmluZSBib3RoIHRoZSBleHRlbmRlZCBtZXRob2RzIGFuZCB0aGUgbWlkZGxld2FyZSBpbiBvdXIgcGx1Z2luXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleHRlbmRzOiB7XG4gICAgICAgICAgICAgICAgTWU6IGV4dGVuc2lvblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==
