(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        cannon.create.onTop(120, 0);
        cannon.create.onTop(150, 500);
        cannon.create.onTop(180, 1000);
        cannon.create.onTop(210, 1500);
        cannon.create.onTop(240, 2000);
        cannon.create.onTop(270, 2500);
        cannon.create.onTop(300, 3000);
        cannon.create.onTop(330, 3500);
        cannon.create.onTop(360, 4000);
        cannon.create.onTop(390, 4500);
        cannon.create.onTop(420, 5000);
        cannon.create.onTop(450, 5500);
        cannon.create.onTop(480, 6000);
        cannon.create.onTop(510, 6500);
        cannon.create.onTop(540, 7000);
        cannon.create.onTop(570, 7500);
        cannon.create.onTop(600, 8000);
        cannon.create.onTop(630, 8500);
        cannon.create.onTop(660, 9000);
        cannon.create.onTop(690, 9500);
        cannon.create.onTop(720, 10000);
        cannon.create.onTop(750, 10500);
        cannon.create.onTop(780, 11000);
       
        
        // ALL YOUR CODE GOESABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
