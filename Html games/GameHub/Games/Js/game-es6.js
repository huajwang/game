class NumberedBox extends createjs.Container {
  constructor(game, number = 0) {
    super();
    // Notice:
    var lib = AdobeAn.getComposition(Object.keys(AdobeAn.compositions)[0]).getLibrary();

    this.game = game;
    this.number = number;

    var movieclip = new lib.NumberedBox();
    movieclip.NumberedText.text = number;

    new createjs.ButtonHelper(movieclip, 0, 1, 2, false, new lib.NumberedBox(), 3);

    this.addChild(movieclip);

    this.setBounds(0,0,50,50);

    this.on('click', this.handleClick.bind(this));

  }
  handleClick() {
    this.game.handleClick(this);
  }
}

class GameData {
  constructor() {
    this.amountOfBox = 3;
    this.resetData();
  }
  resetData() {
    this.currentNumber = 1;
  }
  nextNumber() {
    this.currentNumber++;
  }
  isRightNumber(n) {
    return this.currentNumber === n;
  }
  isGameWin() {
    return this.currentNumber > this.amountOfBox;
    }
}

class Game {
  constructor() {
    console.log(`Welcome to game. Version ${this.version()}`);
    // Notice: Animation CC 2017 release does not expose lib as global variable
    this.lib = AdobeAn.getComposition(Object.keys(AdobeAn.compositions)[0]).getLibrary();

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;

    this.stage.enableMouseOver();

    window.debugStage = this.stage;

    createjs.Ticker.setFPS(60);

    this.gameData = new GameData();

    createjs.Ticker.on("tick", this.stage);
    this.stage.addChild(new this.lib.Background());

    this.generateMultipleBoxes(this.gameData.amountOfBox);
    // var circle = new createjs.Shape();
    // circle.graphics.beginFill("tomato").drawCircle(0,0,40)
    // circle.x = circle.y = 100;
    // this.stage.addChild(circle);
  }
  version(){
    return '1.0.0';
  }
  generateMultipleBoxes(amount=10) {
    for (var i = amount; i > 0; i--) {
      var movieclip = new NumberedBox(this, i);
      this.stage.addChild(movieclip);
          movieclip.x = Math.random() * (this.stage.width - movieclip.getBounds().width);
          movieclip.y = Math.random() * (this.stage.height - movieclip.getBounds().height);
    }
  }

  handleClick(numberedBox) {
    if (this.gameData.isRightNumber(numberedBox.number)) {
      this.stage.removeChild(numberedBox);
      this.gameData.nextNumber();
      if (this.gameData.isGameWin())
      {
        var gameOverView = new this.lib.GameOverVew();
        this.stage.addChild(gameOverView);
      }
    }

  }
}

var game = new Game();
