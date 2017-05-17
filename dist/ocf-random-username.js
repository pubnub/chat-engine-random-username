(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

    const package = require('../package.json');
    window.OpenChatFramework.plugin[package.name] = require('../src/plugin.js');

})();

},{"../package.json":2,"../src/plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "name": "ocf-random-username",
  "version": "0.0.1",
  "main": "src/plugin.js",
  "dependencies": {
    "ocf": "^0.0.4"
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
            namespace: 'random-username',
            extends: {
                Me: extension
            }
        }

    }

}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni43LjAvbGliL25vZGVfbW9kdWxlcy9vY2YtcGx1Z2luL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wL3dyYXAuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBwYWNrYWdlID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJyk7XG4gICAgd2luZG93Lk9wZW5DaGF0RnJhbWV3b3JrLnBsdWdpbltwYWNrYWdlLm5hbWVdID0gcmVxdWlyZSgnLi4vc3JjL3BsdWdpbi5qcycpO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJvY2YtcmFuZG9tLXVzZXJuYW1lXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwibWFpblwiOiBcInNyYy9wbHVnaW4uanNcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwib2NmXCI6IFwiXjAuMC40XCJcbiAgfVxufVxuIiwidmFyIHJhbmRvbU5hbWUgPSAoKSA9PiB7XG5cbiAgICAvLyBsaXN0IG9mIGZyaWVuZGx5IGFuaW1hbHNcbiAgICBsZXQgYW5pbWFscyA9IFsncGlnZW9uJywgJ3NlYWd1bGwnLCAnYmF0JywgJ293bCcsICdzcGFycm93cycsICdyb2JpbicsICdibHVlYmlyZCcsICdjYXJkaW5hbCcsICdoYXdrJywgJ2Zpc2gnLCAnc2hyaW1wJywgJ2Zyb2cnLCAnd2hhbGUnLCAnc2hhcmsnLCAnZWVsJywgJ3NlYWwnLCAnbG9ic3RlcicsICdvY3RvcHVzJywgJ21vbGUnLCAnc2hyZXcnLCAncmFiYml0JywgJ2NoaXBtdW5rJywgJ2FybWFkaWxsbycsICdkb2cnLCAnY2F0JywgJ2x5bngnLCAnbW91c2UnLCAnbGlvbicsICdtb29zZScsICdob3JzZScsICdkZWVyJywgJ3JhY2Nvb24nLCAnemVicmEnLCAnZ29hdCcsICdjb3cnLCAncGlnJywgJ3RpZ2VyJywgJ3dvbGYnLCAncG9ueScsICdhbnRlbG9wZScsICdidWZmYWxvJywgJ2NhbWVsJywgJ2RvbmtleScsICdlbGsnLCAnZm94JywgJ21vbmtleScsICdnYXplbGxlJywgJ2ltcGFsYScsICdqYWd1YXInLCAnbGVvcGFyZCcsICdsZW11cicsICd5YWsnLCAnZWxlcGhhbnQnLCAnZ2lyYWZmZScsICdoaXBwb3BvdGFtdXMnLCAncmhpbm9jZXJvcycsICdncml6emx5YmVhciddO1xuXG4gICAgLy8gbGlzdCBvZiBmcmllbmRseSBjb2xvcnNcbiAgICBsZXQgY29sb3JzID0gWydzaWx2ZXInLCAnZ3JheScsICdibGFjaycsICdyZWQnLCAnbWFyb29uJywgJ29saXZlJywgJ2xpbWUnLCAnZ3JlZW4nLCAndGVhbCcsICdibHVlJywgJ25hdnknLCAnZnVjaHNpYScsICdwdXJwbGUnXTtcblxuICAgIC8vIHJhbmRvbWx5IGdlbmVyYXRlIGEgY29tYm8gb2YgdGhlIHR3byBhbmQgcmV0dXJuIGl0XG4gICAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV0gKyAnXycgKyBhbmltYWxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFuaW1hbHMubGVuZ3RoKV07XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoY29uZmlnKSA9PiB7XG5cbiAgICB2YXIgcGx1Z2luID0gKGNoYXQpID0+IHtcblxuICAgICAgICAvLyBkZWZpbmUgc2VuZCBtaWRkbGV3YXJlXG4gICAgICAgIGNsYXNzIGV4dGVuc2lvbiB7XG4gICAgICAgICAgICBjb25zdHJ1Y3QgKCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5wYXJlbnQuc3RhdGUoY2hhdCk7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VybmFtZSA9IHJhbmRvbU5hbWUoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnVwZGF0ZShzdGF0ZSwgY2hhdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBkZWZpbmUgYm90aCB0aGUgZXh0ZW5kZWQgbWV0aG9kcyBhbmQgdGhlIG1pZGRsZXdhcmUgaW4gb3VyIHBsdWdpblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZXNwYWNlOiAncmFuZG9tLXVzZXJuYW1lJyxcbiAgICAgICAgICAgIGV4dGVuZHM6IHtcbiAgICAgICAgICAgICAgICBNZTogZXh0ZW5zaW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19
