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

initialiseBoard();
pawns = [];
initialisePawns();