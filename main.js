board = [[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,]];

class Pawn {
    constructor(square, moved) {
        this.square = square;
        this.moved = moved;
    }

    get getSquare() {
        return this.square;
    }
    
    get hasMoved() {
        return this.moved;
    }
}

pawn1 = new Pawn("A1", true);

function convertSquare(square) {
    console.log(parseInt(square.slice(0,1)), square.slice(1));
}
convertSquare("A1");