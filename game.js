;(function() {
	var Game = function(canvasID){
		var canvas = docmunet.getElementById(canvasId)
		var screen = canvas.getContext('2d')
		var gamesize = {x: canvas.width, y: canvas.height }

		this.bodies = [new Player]
		
		var self = this;
		var tick = function() {
			self.update();
			self.draw(screen, gamesize);
			requestAnimationFrame(tick);
		}

		tick();
	}

	Game.prototype = {
        update: function() {

        }

        draw: function(screen, gameSize) {
        	screen.fillRect(30,30,40,40);
        }

	}
	var Player = function(game, gameSize) {
		this.center = { x: gamesize.x /};
	}

	window.onload = function() {
		new Game("screen");
	};
}) ();