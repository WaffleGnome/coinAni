
window.addEventListener("load",function() {
	var Q = Quintus()
        .include("Sprites, Anim, Scenes, 2D, Input, Touch")
        .setup({ maximize: true })
        .controls().touch()
        
Q.Sprite.extend("Coin", {
	init: function(p) {
		this._super(p, {
			sprite: "coin",
			sheet: "coin"
		});
		this.add("animation");
		this.play("spin");
	}
});

Q.animations("coin", {
	spin: { frames: [0, 1, 2, 3, 4 ], rate: 1/10, next: "spinReverse" },
	spinReverse: { frames: [ 4, 3, 2, 1, 0 ], rate: 1/10, next: "spin" }
});


Q.scene("level1",function(stage) {
	stage.insert(new Q.Coin({x: 700, y: 100}));
});

Q.load("coin.png, coin-tiles.png", function() {
  Q.sheet("coin","coin-tiles.png", { tilew: 32, tileh: 32 });
  Q.stageScene("level1");
	});
});
