(function() {

  function DrumKit() {
    this.panel = document.querySelector('div.beat-inputs');
  }

  DrumKit.prototype.getCodeButton = function(code) {
    return this.panel.querySelector('div[key-code="' + code + '"]');
  }

  DrumKit.prototype.getCodeSound = function(code) {
    return document.querySelector('audio[key-code="' + code + '"]');
  }

  DrumKit.prototype.activateButton = function(buttonNode) {

  }

  DrumKit.prototype.deactivateButton = function(buttonNode) {

  }

  DrumKit.prototype.playSound = function(soundNode) {

  }

  var drumKit = new DrumKit();
  var inputHandler = function(event) {
    // TODO: distinguish between keydown and keyup
    // TODO: in case of being keyup, play the sound and add the active class to the button
    // TODO: otherwise, remove the active class.
  }

  window.addEventListener('keydown', inputHandler);
  window.addEventListener('keyup', inputHandler);
})();
