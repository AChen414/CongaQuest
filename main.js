/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/attack.js":
/*!***********************!*\
  !*** ./src/attack.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attack; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Attack = /*#__PURE__*/function () {
  function Attack(playerX, playerY, vector) {
    _classCallCheck(this, Attack);

    this.frameIndex = 0;
    var fireball = {
      image: [new Image(), new Image()],
      width: 11,
      height: 11
    };
    fireball.image[0].src = './assets/fireball_0.png';
    fireball.image[1].src = './assets/fireball_1.png';
    this.projectile = {
      sprite: fireball
    };
    this.projectile.position = {
      x: playerX,
      y: playerY
    };
    this.projectile.hitbox = {
      topLeft: this.projectile.position,
      bottomRight: {
        x: this.projectile.position.x + 11,
        y: this.projectile.position.y + 11
      }
    };
    this.projectile.vector = vector;
  }

  _createClass(Attack, [{
    key: "update",
    value: function update() {
      this.projectile.position.x += this.projectile.vector.x * 11;
      this.projectile.position.y += this.projectile.vector.y * 11;
      this.projectile.hitbox = {
        topLeft: this.projectile.position,
        bottomRight: {
          x: this.projectile.position.x + 11,
          y: this.projectile.position.y + 11
        }
      };

      if (this.frameIndex = 0) {
        this.frameIndex++;
      } else {
        this.frameIndex = 0;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.projectile.sprite.image[this.frameIndex], 0, 0, this.projectile.sprite.width, this.projectile.sprite.height, this.projectile.position.x, this.projectile.position.y, this.projectile.sprite.width, this.projectile.sprite.height);
    }
  }]);

  return Attack;
}();



/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enemy = /*#__PURE__*/function () {
  function Enemy(playerX, playerY) {
    var first = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Enemy);

    this.characterFrameIndex = 0;
    var skeletonEnemy = {
      image: [new Image(), new Image(), new Image(), new Image()],
      width: 16,
      height: 16
    };
    skeletonEnemy.image[0].src = './assets/dungeon_tileset/frames/skelet_idle_anim_f0.png';
    skeletonEnemy.image[1].src = './assets/dungeon_tileset/frames/skelet_idle_anim_f1.png';
    skeletonEnemy.image[2].src = './assets/dungeon_tileset/frames/skelet_idle_anim_f2.png';
    skeletonEnemy.image[3].src = './assets/dungeon_tileset/frames/skelet_idle_anim_f3.png';
    this.enemy = {
      sprite: skeletonEnemy
    };
    this.enemy.position = this.enemySpawnPoint(playerX, playerY);
    this.enemy.hitbox = {
      topLeft: this.enemy.position,
      bottomRight: {
        x: this.enemy.position.x + 16,
        y: this.enemy.position.y + 16
      }
    };
    if (first) this.enemy.position = {
      x: 10000,
      y: 10000
    };
  }

  _createClass(Enemy, [{
    key: "enemySpawnPoint",
    value: function enemySpawnPoint(playerX, playerY) {
      var randomX = Math.floor(Math.random() * 634);
      var randomY = Math.floor(Math.random() * 594);

      while (Math.abs(playerX - randomX) < 64 && Math.abs(playerY - randomY)) {
        randomX = Math.floor(Math.random() * 634);
        randomY = Math.floor(Math.random() * 594);
      }

      return {
        x: randomX,
        y: randomY
      };
    }
  }, {
    key: "update",
    value: function update() {
      if (this.characterFrameIndex === 3) {
        this.characterFrameIndex = 0;
      } else {
        this.characterFrameIndex++;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.enemy.sprite.image[this.characterFrameIndex], 0, 0, this.enemy.sprite.width, this.enemy.sprite.height, this.enemy.position.x, this.enemy.position.y, this.enemy.sprite.width * 2, this.enemy.sprite.height * 2);
    }
  }]);

  return Enemy;
}();



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./src/enemy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game(ctx, lose) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.dungeon = new Image();
    this.enemies = [];
    this.attacks = [];
    this.score = 0;
    this.dungeon.src = "./assets/dungeon.png";
    this.lose = lose;
  }

  _createClass(Game, [{
    key: "draw",
    value: function draw() {
      // clears screen
      this.ctx.clearRect(0, 0, 650, 650); // draws dungeon

      this.ctx.drawImage(this.dungeon, 0, 0, 650, 650);
      this.player.draw(this.ctx);
      this.drawAttacks();
      this.drawEnemies();
    }
  }, {
    key: "update",
    value: function update() {
      this.player.update();
      this.updateEnemies(this.determineDifficulty()); // change this when difficulty is implemented

      if (this.attacks.length === 0) {
        this.attackNearestEnemy(this.player.conga[0].position.x, this.player.conga[0].position.y);
      }

      this.updateAttacks();
      this.gameOver();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      var _this = this;

      if (this.outsideMap() || this.playerCollision()) {
        this.player.alive = false;
        this.attacks = [];
        this.player.conga.forEach(function (character) {
          character.sprite = _this.player.deathCharacter;
        });
        if (!this.playerCollision()) this.player.revertMove();
        this.lose(this.score);
      }
    }
  }, {
    key: "outsideMap",
    value: function outsideMap() {
      if (this.player.conga[0].position.x < 0) {
        // When dying off the left
        return true;
      } else if (this.player.conga[0].position.x > 613) {
        // When dying off the right
        return true;
      } else if (this.player.conga[0].position.y < 0) {
        // When dying off the top
        return true;
      } else if (this.player.conga[0].position.y > 549) {
        // When dying off the bottom
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "playerCollision",
    value: function playerCollision() {
      var hurtbox = this.player.conga[0].hurtbox;

      for (var i = 1; i < this.enemies.length; i++) {
        var hitbox = this.enemies[i].enemy.hitbox;

        if (this.collision(hurtbox.topLeft, hurtbox.bottomRight, hitbox.topLeft, hitbox.bottomRight)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "collision",
    value: function collision(topLeft1, bottomRight1, topLeft2, bottomRight2) {
      // checks if object 1 is to the left or right of object 2
      if (topLeft1.x > bottomRight2.x || bottomRight1.x < topLeft2.x) {
        return false;
      } // checks if object 1 is above or below object 2


      if (topLeft1.y > bottomRight2.y || bottomRight1.y < topLeft2.y) {
        return false;
      }

      return true;
    }
  }, {
    key: "updateEnemies",
    value: function updateEnemies(difficulty) {
      var _this2 = this;

      if (this.enemies.length === 0) this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"](this.player.conga[0].position.x, this.player.conga[0].position.y, true)); // when game starts add an enemy off screen 

      while (this.enemies.length < difficulty) {
        this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"](this.player.conga[0].position.x, this.player.conga[0].position.y));
      }

      this.enemies.forEach(function (enemy) {
        enemy.update(_this2.ctx);
      });
    }
  }, {
    key: "drawEnemies",
    value: function drawEnemies() {
      var _this3 = this;

      this.enemies.forEach(function (enemy) {
        enemy.draw(_this3.ctx);
      });
    }
  }, {
    key: "attackNearestEnemy",
    value: function attackNearestEnemy(playerX, playerY) {
      for (var i = 0; i < this.enemies.length; i++) {
        if (Math.abs(this.enemies[i].enemy.position.x - playerX) < 100 && Math.abs(this.enemies[i].enemy.position.y - playerY) < 100) {
          var attack = this.player.attack(this.enemies[i].enemy.position.x, this.enemies[i].enemy.position.y, playerX, playerY);
          this.attacks.push(attack);
          return;
        }
      }
    }
  }, {
    key: "drawAttacks",
    value: function drawAttacks() {
      var _this4 = this;

      this.attacks.forEach(function (attack) {
        attack.draw(_this4.ctx);
      });
    }
  }, {
    key: "updateAttacks",
    value: function updateAttacks() {
      var _this5 = this;

      this.attacks.forEach(function (attack) {
        attack.update(); // if projectile goes off screen, remove it

        if (attack.projectile.position.x > 650 || attack.projectile.position.x < 0 || attack.projectile.position.y > 610 || attack.projectile.position.y < 0) {
          _this5.attacks.pop(); // change this once more than one person attacks

        } // checks if attack collides with enemy and removes if it does


        var idxToRemove = null;

        _this5.enemies.forEach(function (enemy) {
          if (_this5.collision(enemy.enemy.hitbox.topLeft, enemy.enemy.hitbox.bottomRight, attack.projectile.hitbox.topLeft, attack.projectile.hitbox.bottomRight)) {
            _this5.attacks.pop(); // change this once more than one person attacks


            idxToRemove = _this5.enemies.indexOf(enemy);
          }
        });

        if (idxToRemove) {
          // removes enemy when hit
          _this5.updateScore();

          _this5.enemies.splice(idxToRemove, 1);
        }
      });
    }
  }, {
    key: "updateScore",
    value: function updateScore() {
      this.score++;
      document.getElementById('score').innerHTML = this.score;
    }
  }, {
    key: "determineDifficulty",
    value: function determineDifficulty() {
      return Math.floor(this.score / 2 + 2);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameView; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameView = /*#__PURE__*/function () {
  function GameView(ctx, lose) {
    _classCallCheck(this, GameView);

    this.lastRenderTime = 0;
    this.updatesPerSecond = 8;
    this.score = 0;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, lose);
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      this.animate();
    }
  }, {
    key: "animate",
    value: function animate(currentTime) {
      var _this = this;

      window.requestAnimationFrame(function (currentTime) {
        _this.animate(currentTime);
      });
      var secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
      if (secondsSinceLastRender < 1 / this.updatesPerSecond) return;
      this.lastRenderTime = currentTime; // console.log('Render');

      this.update();
      this.draw();
    }
  }, {
    key: "update",
    value: function update() {
      this.game.update();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.game.draw();
    }
  }]);

  return GameView;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem('highScore')) localStorage.setItem('highScore', 0);
  mainScreen();
});

function mainScreen() {
  var startScreen = document.getElementById("start-screen");
  startScreen.style.visibility = 'visible';
  setTimeout(function () {
    document.addEventListener("keydown", run);
  }, 500);
}

function run() {
  document.getElementById("game-over-modal").style.zIndex = 0;
  document.removeEventListener("keydown", run);
  var oldCanvas = document.getElementById('game-screen');
  if (oldCanvas) oldCanvas.remove();
  var newCanvas = createCanvas();
  document.getElementsByClassName('canvas')[0].append(newCanvas);
  var canvas = document.getElementById("game-screen");
  var ctx = canvas.getContext("2d");
  var newGame = new _game_view__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, lose);
  document.getElementById("start-screen").style.visibility = "hidden";
  newGame.start();
} // function animation(e) {
//     this.innerHTML = e.fall
// }    


function lose(score) {
  var gameOver = document.getElementById("game-over-modal");
  var endScore = document.getElementById("end-score");
  var highScore = document.getElementById("high-score");
  endScore.innerHTML = "Score: ".concat(score);

  if (parseInt(localStorage.getItem('highScore')) < score) {
    localStorage.setItem('highScore', score);
    highScore.innerHTML = "High Score: ".concat(localStorage.getItem('highScore'));
  } else {
    highScore.innerHTML = "High Score: ".concat(localStorage.getItem('highScore'));
  }

  gameOver.style.zIndex = 11;
  setTimeout(function () {
    document.addEventListener("keydown", run);
  }, 500);
}

function createCanvas() {
  var canvas = document.createElement('canvas');
  canvas.id = 'game-screen';
  canvas.classList.add('screen');
  canvas.height = 610;
  canvas.width = 650;
  return canvas;
}

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Input = /*#__PURE__*/function () {
  function Input() {
    _classCallCheck(this, Input);

    // Sets initial direction to be moving up
    this.inputDirection = {
      x: 0,
      y: -1
    };
  }

  _createClass(Input, [{
    key: "getInputDirection",
    value: function getInputDirection() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 37:
            if (_this.inputDirection.x !== 0) break; // Makes it so you can't move left when moving left or right

            _this.inputDirection = {
              x: -1,
              y: 0
            };
            break;

          case 38:
            if (_this.inputDirection.y !== 0) break; // Makes it so you can't move up when moving up or down

            _this.inputDirection = {
              x: 0,
              y: -1
            };
            break;

          case 39:
            if (_this.inputDirection.x !== 0) break; // Makes it so you can't move right when moving right or left

            _this.inputDirection = {
              x: 1,
              y: 0
            };
            break;

          case 40:
            if (_this.inputDirection.y !== 0) break; // Makes it so you can't move down when moving down or up

            _this.inputDirection = {
              x: 0,
              y: 1
            };
            break;
        }
      });
      return this.inputDirection;
    }
  }]);

  return Input;
}();


;

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/input.js");
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attack */ "./src/attack.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    // this.x = 325;
    // this.y = 325;
    this.direction;
    this.input = new _input__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.characterFrameIndex = 0;
    this.alive = true;
    this.previousPosition;
    var wizardCharacter = {
      image: [new Image(), new Image(), new Image(), new Image()],
      width: 32,
      height: 48
    };
    wizardCharacter.image[0].src = './assets/wizard_f_0.png';
    wizardCharacter.image[1].src = './assets/wizard_f_1.png';
    wizardCharacter.image[2].src = './assets/wizard_f_2.png';
    wizardCharacter.image[3].src = './assets/wizard_f_3.png';
    var knightCharacter = {
      image: [new Image(), new Image(), new Image(), new Image()],
      width: 32,
      height: 48
    };
    knightCharacter.image[0].src = './assets/knight_f_0.png';
    knightCharacter.image[1].src = './assets/knight_f_1.png';
    knightCharacter.image[2].src = './assets/knight_f_2.png';
    knightCharacter.image[3].src = './assets/knight_f_3.png';
    this.deathCharacter = {
      image: [new Image(), new Image(), new Image(), new Image()],
      width: 18,
      height: 24
    };
    this.deathCharacter.image[0].src = './assets/follower-gravestone.png';
    this.deathCharacter.image[1].src = './assets/follower-gravestone.png';
    this.deathCharacter.image[2].src = './assets/follower-gravestone.png';
    this.deathCharacter.image[3].src = './assets/follower-gravestone.png';
    this.conga = [{
      sprite: wizardCharacter,
      position: {
        x: 325,
        y: 325
      }
    }, {
      sprite: knightCharacter,
      position: {
        x: 325,
        y: 360
      }
    }, {
      sprite: wizardCharacter,
      position: {
        x: 325,
        y: 395
      }
    }];
    this.updateHurtBox();
  }

  _createClass(Player, [{
    key: "update",
    value: function update() {
      if (this.alive) {
        // previous position of last character in line
        this.previousPosition = {
          x: this.conga[2].position.x,
          y: this.conga[2].position.y
        }; // gets input and updates direction

        this.direction = this.input.getInputDirection(); // replaces characters in the line with the next person in line

        for (var i = this.conga.length - 2; i >= 0; i--) {
          this.conga[i + 1].position = _objectSpread({}, this.conga[i].position);
        } // moves the head of the conga line


        this.conga[0].position.x += this.direction.x * 32;
        this.conga[0].position.y += this.direction.y * 32;
        this.updateHurtBox(); // changes the character sprite frame

        if (this.characterFrameIndex === 3) {
          this.characterFrameIndex = 0;
        } else {
          this.characterFrameIndex++;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var _this = this;

      this.conga.forEach(function (character) {
        ctx.drawImage(character.sprite.image[_this.characterFrameIndex], 0, 0, character.sprite.width, character.sprite.height, character.position.x, character.position.y, character.sprite.width, character.sprite.height);
      });
    } // used for death so graves appear at correct spot 

  }, {
    key: "revertMove",
    value: function revertMove() {
      this.conga[0].position = this.conga[1].position;
      this.conga[1].position = this.conga[2].position;
      this.conga[2].position = this.previousPosition;
    }
  }, {
    key: "updateHurtBox",
    value: function updateHurtBox() {
      this.conga.forEach(function (character) {
        character.hurtbox = {
          topLeft: {
            x: character.position.x,
            y: character.position.y
          },
          bottomRight: {
            x: character.position.x + 32,
            y: character.position.y + 48
          }
        };
      });
    }
  }, {
    key: "attack",
    value: function attack(enemyX, enemyY, playerX, playerY) {
      var attackX = enemyX - playerX;
      var attackY = enemyY - playerY; // gets the vector direction the attack should travel

      if (attackX > attackY) {
        attackY = attackY / Math.abs(attackX);
        attackX = attackX / Math.abs(attackX);
      } else {
        attackX = attackX / Math.abs(attackY);
        attackY = attackY / Math.abs(attackY);
      }

      return new _attack__WEBPACK_IMPORTED_MODULE_1__["default"](playerX, playerY, {
        x: attackX,
        y: attackY
      });
    }
  }]);

  return Player;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.js.map