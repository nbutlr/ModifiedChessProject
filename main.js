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

    checkLegalMoves() {
        let legal=[];
        if (this.moved==false && document.getElementById(this.square[0]+(parseInt(this.square[1])+1).toString()).innerHTML == "" && document.getElementById(this.square[0]+(parseInt(this.square[1])+2).toString()).innerHTML == "" ){
            legal.push(this.square[0]+(parseInt(this.square[1])+2).toString());
        }
        if(document.getElementById(this.square[0]+(parseInt(this.square[1])+1).toString()).innerHTML == "") {
            legal.push(this.square[0]+(parseInt(this.square[1])+1).toString())
        }
        console.log(legal);
    }

    move(square) {
        document.getElementById(this.square).innerHTML=this.square;
        this.square = square;
        if (this.colour == "white") {
            document.getElementById(square).innerHTML = "&#9817;";
        } else {
            document.getElementById(square).innerHTML = "&#9823;";
        }
    }

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

    checkLegalMoves() {
        let legal = [];
        let moves = [[-2,-1,1,2,2,1,-1,-2],[1,2,2,1,-1,-2,-2,-1]];
        for(i=0;i<8;i++) {
            try {
                if(document.getElementById(String.fromCharCode(this.square[0].charCodeAt()+moves[0][i])+(parseInt(this.square[1])+moves[1][i]).toString()).innerHTML == "") {
                    legal.push(String.fromCharCode(this.square[0].charCodeAt()+moves[0][i])+(parseInt(this.square[1])+moves[1][i]).toString())
                } else {
                    console.log("Square taken");
                }
            } catch (error) {
                console.log("Square not found");
            }
        }
        console.log(legal);
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

    checkLegalMoves() {
        let legal=[];
        i=0;
        while (this.square[0].charCodeAt(0)-64-i > 0 && this.square[1]-i > 0) {
            try {
                console.log(String.fromCharCode(this.square[0].charCodeAt()-i)+(parseInt(this.square[1])-i).toString())
                if(document.getElementById(String.fromCharCode(this.square[0].charCodeAt()-i)+(parseInt(this.square[1])-i).toString()).innerHTML == "") {
                    legal.push(String.fromCharCode(this.square[0].charCodeAt()-i)+(parseInt(this.square[1])-i).toString())
                } else {
                    console.log("Square taken");
                }
            } catch (error) {
                console.log("Square not found");
            }
            i++;
        }
        i=0;
        while (this.square[0].charCodeAt(0)-64-i > 0 && this.square[1]+i < 9) {
            try {
                console.log(String.fromCharCode(this.square[0].charCodeAt()-i)+(parseInt(this.square[1])+i).toString())
                if(document.getElementById(String.fromCharCode(this.square[0].charCodeAt()-i)+(parseInt(this.square[1])+i).toString()).innerHTML == "") {
                    legal.push(String.fromCharCode(this.square[0].charCodeAt()-i)+(parseInt(this.square[1])+i).toString())
                } else {
                    console.log("Square taken");
                }
            } catch (error) {
                console.log("Square not found");
            }
            i++;
        }
        console.log(legal);
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
    return [square[0], parseInt(square.slice(1))];
}

function initialiseBoard() {
    document.getElementById("board").innerHTML = "";
    for (i=8;i>0;i--) {
        document.getElementById("board").innerHTML += "<div>";
        for (j=1;j<9;j++) {
            file = String.fromCharCode(j+64);
            document.getElementById("board").innerHTML += "<span id='"+file+i.toString()+"' class='"+file+" "+i.toString()+"'></span>";
        }
        document.getElementById("board").innerHTML += "</div>";
    }
}

function initialisePawns() {
    for (i=1;i<9;i++) {
        pieces.push(new Pawn(String.fromCharCode(i+64)+"2", false, "white"));
    }
    for (j=1;j<9;j++) {
        pieces.push(new Pawn(String.fromCharCode(j+64)+"7", false, "black"));
    }
}

function initialisePieces() {
    for (i=1;i<3;i++) {
        rank = Math.pow(i,3).toString();
        pieces.push(new Rook("A"+rank, colours[i-1]));
        pieces.push(new Knight("B"+rank, colours[i-1]));
        pieces.push(new Bishop("C"+rank, colours[i-1]));
        pieces.push(new Queen("D"+rank, colours[i-1]));
        pieces.push(new King("E"+rank, colours[i-1]));
        pieces.push(new Bishop("F"+rank, colours[i-1]));
        pieces.push(new Knight("G"+rank, colours[i-1]));
        pieces.push(new Rook("H"+rank, colours[i-1]));
    }
}

function dropDown() {
    options = "";
    for (i=0;i<pieces.length;i++) {
        if (turn % 2 == 0 && pieces[i].colour == "white") {
            options += "<option>"+pieces[i].square+"</option>";
        } else if (turn % 2 == 1 && pieces[i].colour == "black") {
            options += "<option>"+pieces[i].square+"</option>";
        }
    }
    document.getElementById("pieceSelect").innerHTML = options;
}

initialiseBoard();
colours = ["white","black"];
pieces = [];
turn = 0;
initialisePawns();
initialisePieces();
dropDown();
pieces[18].checkLegalMoves();
//pieces[4].checkLegalMoves();