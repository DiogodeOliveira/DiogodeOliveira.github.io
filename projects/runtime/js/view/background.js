var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var clouds = [];
        var cloud;
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.heig;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
            
            var cityWidth = 462;
            var cityHeight = 259;
            var backgroundImage = draw.bitmap('img/city.png');
            background.addChild(backgroundImage);
            backgroundImage.x = backgroundImage.y = 0;
            backgroundImage.scaleX = canvasWidth / cityWidth;
            backgroundImage.scaleY = groundY / cityHeight;
            
            
            // TODO: 3 - Add a moon and starfield
           
            
            var moon = draw.bitmap('img/moon.png');
            moon.x = 300;
            moon.y = 25;
            moon.scaleX = .5;
            moon.scaleY = .5;
            background.addChild(moon);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
           
            var cloudHeight = 111;
            
            for(var i = 0; i < 5; i++) {
                var cloudImage = draw.bitmap('img/cloud.png')
                cloud.x = 200 * i;
                cloud.y = 0 + cloudHeight;
                background.addChild(cloud);
                clouds.push(cloud);
            }
            // TODO 4: Part 1 - Add a tree
            
            tree = draw.bitmap('img/tree.png');
            tree.x = 200;
            tree.y = 100;
            background.addChild(tree);
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            tree.x = tree.x - 1;
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            
            for (var i = 0; i < clouds.length; i++) {
                clouds[i].x = clouds[i].x - 1;
                if (clouds[i].x < -200) {
                    clouds[i].x = canvasWidth;
                }
                
            }

            
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
