(function() {

  // TODO: Add the docblocks to this project.

  function DrumKit() {
    this.panel = document.querySelector('div.beat-inputs');
  }

  DrumKit.prototype.getButton = function(code) {
    return this.panel.querySelector('div[key-code="' + code + '"]');
  }

  DrumKit.prototype.getAudio = function(code) {
    return document.querySelector('audio[key-code="' + code + '"]');
  }

  DrumKit.prototype.activateButton = function(code) {
    var button = this.getButton(code);

    if (button != null) {
      button.classList.add('beat-inputs__button--pressed');
    }
  }

  DrumKit.prototype.deactivateButton = function(code) {
    var button = this.getButton(code);

    if (button != null) {
      button.classList.remove('beat-inputs__button--pressed');
    }
  }

  DrumKit.prototype.playAudio = function(code) {
    var audio = this.getAudio(code);

    if (audio != null) {
      this.getAudio(code).play();
    }
  }

  var drumKit = new DrumKit();
  var inputHandler = function(event) {
    var code = event.keyCode;

    if (event.type == 'keydown') {
      drumKit.playAudio(code);
      drumKit.activateButton(code);
    }

    if (event.type == 'keyup') {
      drumKit.deactivateButton(code);
    }
  }

  window.addEventListener('keydown', inputHandler);
  window.addEventListener('keyup', inputHandler);
})();
