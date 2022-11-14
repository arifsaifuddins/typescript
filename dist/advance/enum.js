"use strict";
// enum
var Directions;
(function (Directions) {
    // // up, // for default the value is 1 and next after one if not asign with string | up = 1
    // down,
    // left,
    // right
    Directions["up"] = "up";
    Directions["down"] = "down";
})(Directions || (Directions = {}));
// console.log(Directions.left) // output : 3
console.log(Directions.down); // output : down
