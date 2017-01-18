(function() {

  // TODO: Add the docblocks to this project.

  function DrumKit() {
    this.panel = document.querySelector('div.beat-inputs');
  }

  DrumKit.prototype.getButton = function(code) {
    var buttonNode = this.panel.querySelector('div[key-code="' + code + '"]');

    if (buttonNode == null) {
      throw Error('Button not found.');
    }

    return buttonNode;
  }

  DrumKit.prototype.getAudio = function(code) {
    var audioNode = document.querySelector('audio[key-code="' + code + '"]');

    if (audioNode == null) {
      throw Error('Audio not found.');
    }

    return audioNode;
  }

  DrumKit.prototype.activateButton = function(buttonNode) {
    // TODO: Write this code when the css becomes finished
  }

  DrumKit.prototype.deactivateButton = function(buttonNode) {
    // TODO: Write this code when the css becomes finished
  }

  DrumKit.prototype.playAudio = function(code) {
    try {
      this.getAudio(code).play();
    } catch (error) {
      return;
    }
  }

  var drumKit = new DrumKit();
  var inputHandler = function(event) {
    var code = event.keyCode;

    if (event.type == 'keydown') {
      drumKit.playAudio(code);
      drumKit.activateButton(code);
    } else if (event.type == 'keyup') {
      drumKit.deactivateButton(code);
    }
  }

  window.addEventListener('keydown', inputHandler);
  window.addEventListener('keyup', inputHandler);
})();
