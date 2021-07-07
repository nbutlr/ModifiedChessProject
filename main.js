/* This is my main javascript file where the Modified Chess game will be handled and run
Created by Nathan Butler starting 14/06/21 for my A-level Computer Science project */

class Pawn { 
    constructor(square, moved, colour) {
        this.square = square;
        this.moved = moved;
        this.colour = colour;
        this.onBoard = true;
        if (colour == "white") {
            document.getElementById(square).innerHTML = "&#9817;";
        } else {
            document.getElementById(square).innerHTML = "&#9823;";
        }
    }

    getSquare() {
        return this.square;
    }
    
    hasMoved() {
        return this.moved;
    }

    // move(square) {

    // }

    hasMoved(bool) {
        this.moved = bool;
    }

    destroy() {
        this.onBoard = false;
    }
}

class Knight {
    constructor(square, colour) {
        this.square = square;
        this.colour = colour;
        this.onBoard = true;
        if (colour == "white") {
            document.getElementById(square).innerHTML = "&#9816;";
        } else {
            document.getElementById(square).innerHTML = "&#9822;";
        }
    }

    getSquare() {
        return this.square;
    }

    destroy() {
        this.onBoard = false;
    }
}

class Bishop {
    constructor(square, colour) {
        this.square = square;
        this.colour = colour;
        this.onBoard = true;
        if (colour == "white") {
            document.getElementById(square).innerHTML = "&#9815;";
        } else {
            document.getElementById(square).innerHTML = "&#9821;";
        }
    }

    getSquare() {
        return this.square;
    }

    destroy() {
        this.onBoard = false;
    }
}

class Rook {
    constructor(square, colour) {
        this.square = square;
        this.colour = colour;
        this.hasMoved = false;
        this.onBoard = true;
        if (colour == "white") {
            document.getElementById(square).innerHTML = "&#9814;";
        } else {
            document.getElementById(square).innerHTML = "&#9820;";
        }
    }
}

class Queen {
    constructor(square, colour) {
        this.square = square;
        this.colour = colour;
        this.onBoard = true;
        if (colour == "white") {
            document.getElementById(square).innerHTML = "&#9813;";
        } else {
            document.getElementById(square).innerHTML = "&#9819;";
        }
    }
}

class King {
    constructor(square, colour) {
        this.square = square;
        this.colour = colour;
        this.hasMoved = false;
        this.inCheck = false;
        this.onBoard = true;
        if (colour == "white") {
            document.getElementById(square).innerHTML = "&#9812;";
        } else {
            document.getElementById(square).innerHTML = "&#9818;";
        }
    }
}

function convertSquare(square) {
    return (square.charCodeAt(0)-64, parseInt(square.slice(1)));
}

function initialiseBoard() {
    document.getElementById("board").innerHTML = "";
    for (i=8;i>0;i--) {
        document.getElementById("board").innerHTML += "<div>";
        for (j=1;j<9;j++) {
            file = String.fromCharCode(j+64);
            document.getElementById("board").innerHTML += "<span id='"+file+i.toString()+"' class='"+file+" "+i.toString()+"'>"+file+i.toString()+"</span>";
        }
        document.getElementById("board").innerHTML += "</div>";
    }
}

function initialisePawns() {
    for (i=1;i<9;i++) {
        pawns.push(+new Pawn(String.fromCharCode(i+64)+"2", false, "white"));
    }
    for (j=1;j<9;j++) {
        pawns.push(+new Pawn(String.fromCharCode(j+64)+"7", false, "black"));
    }
}

function initialisePieces() {
    for (i=1;i<3;i++) {
        rank = Math.pow(i,3).toString();
        rooks.push(+new Rook("A"+rank, colours[i-1]));
        knights.push(+new Knight("B"+rank, colours[i-1]));
        bishops.push(+new Bishop("C"+rank, colours[i-1]));
        queens.push(+new Queen("D"+rank, colours[i-1]));
        kings.push(+new King("E"+rank, colours[i-1]));
        bishops.push(+new Bishop("F"+rank, colours[i-1]));
        knights.push(+new Knight("G"+rank, colours[i-1]));
        rooks.push(+new Rook("H"+rank, colours[i-1]));
    }
}

initialiseBoard();
colours = ["white","black"];
pawns = [];
knights = [];
bishops = [];
rooks = [];
queens = [];
kings = [];
initialisePawns();
initialisePieces();