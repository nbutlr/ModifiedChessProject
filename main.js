/* This is my main javascript file where the Modified Chess game will be handled and run
Created by Nathan Butler starting 14/06/21 for my A-level Computer Science project */

class Pawn { 
    constructor(square, colour, moved) {
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
    
    checkLegalMoves() {
        let legal=[];
        if (this.colour=="white") {
            if (this.moved==false && document.getElementById(this.square[0]+(parseInt(this.square[1])+1).toString()).innerHTML == "" && document.getElementById(this.square[0]+(parseInt(this.square[1])+2).toString()).innerHTML == "" ){
                legal.push(this.square[0]+(parseInt(this.square[1])+2).toString());
            }
            try {
                if(document.getElementById(this.square[0]+(parseInt(this.square[1])+1).toString()).innerHTML == "") {
                    legal.push(this.square[0]+(parseInt(this.square[1])+1).toString());
                }
            } catch (error) {
            }
            try {
                if(document.getElementById(String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])+1).toString()).innerHTML != "") {
                    if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])+1).toString())].colour!=this.colour) {
                        legal.push(String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])+1).toString());
                    }
                } else if (String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])+1).toString() == enPassant) {
                    legal.push(String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])+1).toString());
                }
            } catch (error) {
            } try {
                if(document.getElementById(String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])+1).toString()).innerHTML != "") {
                    if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])+1).toString())].colour!=this.colour) {
                        legal.push(String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])+1).toString());
                    }
                } else if (String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])+1).toString() == enPassant) {
                    legal.push(String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])+1).toString());
                }
            } catch (error) {
            }
        } else {
            if (this.moved==false && document.getElementById(this.square[0]+(parseInt(this.square[1])-1).toString()).innerHTML == "" && document.getElementById(this.square[0]+(parseInt(this.square[1])-2).toString()).innerHTML == "" ){
                legal.push(this.square[0]+(parseInt(this.square[1])-2).toString());
            }
            try {
                if(document.getElementById(this.square[0]+(parseInt(this.square[1])-1).toString()).innerHTML == "") {
                    legal.push(this.square[0]+(parseInt(this.square[1])-1).toString());
                }
            } catch (error) {
            }
            try {
                if(document.getElementById(String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])-1).toString()).innerHTML != "") {
                    if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])-1).toString())].colour!=this.colour) {
                        legal.push(String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])-1).toString());
                    }
                } else if (String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])-1).toString() == enPassant) {
                    legal.push(String.fromCharCode(this.square[0].charCodeAt()-1)+(parseInt(this.square[1])-1).toString());
                }
            } catch (error) {
            }
            try {
                if(document.getElementById(String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])-1).toString()).innerHTML != "") {
                    if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])-1).toString())].colour!=this.colour) {
                        legal.push(String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])-1).toString());
                    }
                } else if (String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])-1).toString() == enPassant) {
                    legal.push(String.fromCharCode(this.square[0].charCodeAt()+1)+(parseInt(this.square[1])-1).toString());
                }
            } catch (error) {
            }
        }
        return legal;
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

    destroy() {
        this.onBoard = false;
        pieces[pieces.map(function(e) { return e.square; }).indexOf(this.square)]="";
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
                    if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(this.square[0].charCodeAt()+moves[0][i])+(parseInt(this.square[1])+moves[1][i]).toString())].colour!=this.colour) {
                        legal.push(String.fromCharCode(this.square[0].charCodeAt()+moves[0][i])+(parseInt(this.square[1])+moves[1][i]).toString())
                    }
                }
            } catch (error) {
            }
        }
        return legal;
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
        let legal = [];
        legal = checkDiagonal(this.square, this.colour);
        return legal;
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
        this.moved = false;
        this.onBoard = true;
        if (colour == "white") {
            document.getElementById(square).innerHTML = "&#9814;";
        } else {
            document.getElementById(square).innerHTML = "&#9820;";
        }
    }
    checkLegalMoves() {
        let legal = [];
        legal = checkPerpendicular(this.square, this.colour);
        return legal;
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
    checkLegalMoves() {
        let legal = [];
        legal = checkPerpendicular(this.square, this.colour);
        legal = legal.concat(checkDiagonal(this.square, this.colour));
        return legal;
    }
}

class King {
    constructor(square, colour) {
        this.square = square;
        this.colour = colour;
        this.moved = false;
        this.inCheck = false;
        this.onBoard = true;
        if (colour == "white") {
            document.getElementById(square).innerHTML = "&#9812;";
        } else {
            document.getElementById(square).innerHTML = "&#9818;";
        }
    }
    checkLegalMoves() {
        let legal = [];
        let moves = [[-1,-1,-1,0,1,1,1,0],[-1,0,1,1,1,0,-1,-1]];
        for(i=0;i<8;i++) {
            try {
                if(document.getElementById(String.fromCharCode(this.square[0].charCodeAt()+moves[0][i])+(parseInt(this.square[1])+moves[1][i]).toString()).innerHTML == "") {
                    legal.push(String.fromCharCode(this.square[0].charCodeAt()+moves[0][i])+(parseInt(this.square[1])+moves[1][i]).toString())
                } else {
                    if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(this.square[0].charCodeAt()+moves[0][i])+(parseInt(this.square[1])+moves[1][i]).toString())].colour!=this.colour) {
                        legal.push(String.fromCharCode(this.square[0].charCodeAt()+moves[0][i])+(parseInt(this.square[1])+moves[1][i]).toString())
                    }
                }
            } catch (error) {
            }
        }
        // Checking if castling is legal - king does not move through check //
        if(this.moved == false) {
            if(this.square[1]=="1") {
                if(document.getElementById("A1").innerHTML.charCodeAt() == 9814 && pieces[pieces.map(function(e) { return e.square; }).indexOf("A1")].moved == false) {
                    if(document.getElementById("B1").innerHTML=="" && document.getElementById("C1").innerHTML == "" && document.getElementById("D1").innerHTML == "") {
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("E1")].square="D1";
                        document.getElementById("D1").innerHTML=document.getElementById("E1").innerHTML;
                        document.getElementById("E1").innerHTML="";
                        checks = inCheck();
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("D1")].square="C1";
                        document.getElementById("C1").innerHTML=document.getElementById("D1").innerHTML;
                        document.getElementById("D1").innerHTML="";
                        checks.concat(inCheck());
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("C1")].square="E1";
                        document.getElementById("E1").innerHTML=document.getElementById("C1").innerHTML;
                        document.getElementById("C1").innerHTML="";
                        if (checks.length==0) {
                            legal.push("C1");
                        }
                    }
                }
                if(document.getElementById("H1").innerHTML.charCodeAt() == 9814 && pieces[pieces.map(function(e) { return e.square; }).indexOf("H1")].moved == false) {
                    if(document.getElementById("F1").innerHTML=="" && document.getElementById("G1").innerHTML == "") {
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("E1")].square="F1";
                        document.getElementById("F1").innerHTML=document.getElementById("E1").innerHTML;
                        document.getElementById("E1").innerHTML="";
                        checks = inCheck();
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("F1")].square="G1";
                        document.getElementById("G1").innerHTML=document.getElementById("F1").innerHTML;
                        document.getElementById("F1").innerHTML="";
                        checks.concat(inCheck());
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("G1")].square="E1";
                        document.getElementById("E1").innerHTML=document.getElementById("G1").innerHTML;
                        document.getElementById("G1").innerHTML="";
                        if (checks.length==0) {
                            legal.push("G1");
                        }
                    }
                }
            } else if (this.square[1]=="8") {
                if(document.getElementById("A8").innerHTML.charCodeAt() == 9820 && pieces[pieces.map(function(e) { return e.square; }).indexOf("A8")].moved == false) {
                    if(document.getElementById("B8").innerHTML=="" && document.getElementById("C8").innerHTML == "" && document.getElementById("D8").innerHTML == "") {
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("E8")].square="D8";
                        document.getElementById("D8").innerHTML=document.getElementById("E8").innerHTML;
                        document.getElementById("E8").innerHTML="";
                        checks = inCheck();
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("D8")].square="C8";
                        document.getElementById("C8").innerHTML=document.getElementById("D8").innerHTML;
                        document.getElementById("D8").innerHTML="";
                        checks.concat(inCheck());
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("C8")].square="E8";
                        document.getElementById("E8").innerHTML=document.getElementById("C8").innerHTML;
                        document.getElementById("C8").innerHTML="";
                        if (checks.length==0) {
                            legal.push("C8");
                        }
                    }
                }
                if(document.getElementById("H8").innerHTML.charCodeAt() == 9820 && pieces[pieces.map(function(e) { return e.square; }).indexOf("H8")].moved == false) {
                    if(document.getElementById("F8").innerHTML=="" && document.getElementById("G8").innerHTML == "") {
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("E8")].square="F8";
                        document.getElementById("F8").innerHTML=document.getElementById("E8").innerHTML;
                        document.getElementById("E8").innerHTML="";
                        checks = inCheck();
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("F8")].square="G8";
                        document.getElementById("G8").innerHTML=document.getElementById("F8").innerHTML;
                        document.getElementById("F8").innerHTML="";
                        checks.concat(inCheck());
                        pieces[pieces.map(function(e) { return e.square; }).indexOf("G8")].square="E8";
                        document.getElementById("E8").innerHTML=document.getElementById("G8").innerHTML;
                        document.getElementById("G8").innerHTML="";
                        if (checks.length==0) {
                            legal.push("G8");
                        }
                    }
                }
            }
        }
        return legal;
    }
}

function convertSquare(square) {
    return [square[0], parseInt(square.slice(1))];
}

function initialiseBoard() {
    document.getElementById("board").innerHTML = "";
    for (i=8;i>0;i--) {
        for (j=1;j<9;j++) {
            file = String.fromCharCode(j+64);
            document.getElementById("board").innerHTML += "<span id='"+file+i.toString()+"' class='boardSpan' onclick='clickBoard("+'"'+file+i.toString()+'"'+")'></span>";
        }
        document.getElementById("board").innerHTML += "<span class='boardLabel'>"+i.toString()+"</span>";
    }
    document.getElementById("board").innerHTML += "<div>";
    for (j=1;j<9;j++) {
        file = String.fromCharCode(j+64);
        document.getElementById("board").innerHTML += "<span class='boardLabel'>"+file+"</span>";
    }
    document.getElementById("board").innerHTML += "</div>";
}

function initialisePawns() {
    for (i=1;i<9;i++) {
        pieces.push(new Pawn(String.fromCharCode(i+64)+"2", "white", false));
    }
    for (j=1;j<9;j++) {
        pieces.push(new Pawn(String.fromCharCode(j+64)+"7", "black", false));
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

function checkDiagonal(testSquare, pieceColour) {
    let legal=[];
    i=1;
    while (testSquare[0].charCodeAt(0)-64-i > 0 && testSquare[1]-i > 0) {
        try {
            if(document.getElementById(String.fromCharCode(testSquare[0].charCodeAt()-i)+(parseInt(testSquare[1])-i).toString()).innerHTML == "") {
                legal.push(String.fromCharCode(testSquare[0].charCodeAt()-i)+(parseInt(testSquare[1])-i).toString())
            } else {
                if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(testSquare[0].charCodeAt()-i)+(parseInt(testSquare[1])-i).toString())].colour!=pieceColour) {
                    legal.push(String.fromCharCode(testSquare[0].charCodeAt()-i)+(parseInt(testSquare[1])-i).toString())
                }
                break;
            }
        } catch (error) {
            break;
        }
        i++;
    }
    i=1;
    while (testSquare[0].charCodeAt(0)-64-i > 0 && parseInt(testSquare[1])+i < 9) {
        try {
            if(document.getElementById(String.fromCharCode(testSquare[0].charCodeAt()-i)+(parseInt(testSquare[1])+i).toString()).innerHTML == "") {
                legal.push(String.fromCharCode(testSquare[0].charCodeAt()-i)+(parseInt(testSquare[1])+i).toString())
            } else {
                if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(testSquare[0].charCodeAt()-i)+(parseInt(testSquare[1])+i).toString())].colour!=pieceColour) {
                    legal.push(String.fromCharCode(testSquare[0].charCodeAt()-i)+(parseInt(testSquare[1])+i).toString())
                }
                break;
            }
        } catch (error) {
            break;
        }
        i++;
    }
    i=1;
    while (testSquare[0].charCodeAt(0)-64+i < 9 && parseInt(testSquare[1])+i < 9) {
        try {
            if(document.getElementById(String.fromCharCode(testSquare[0].charCodeAt()+i)+(parseInt(testSquare[1])+i).toString()).innerHTML == "") {
                legal.push(String.fromCharCode(testSquare[0].charCodeAt()+i)+(parseInt(testSquare[1])+i).toString())
            } else {
                if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(testSquare[0].charCodeAt()+i)+(parseInt(testSquare[1])+i).toString())].colour!=pieceColour) {
                    legal.push(String.fromCharCode(testSquare[0].charCodeAt()+i)+(parseInt(testSquare[1])+i).toString())
                }
                break;
            }
        } catch (error) {
            break;
        }
        i++;
    }
    i=1;
    while (testSquare[0].charCodeAt(0)-64+i < 9 && parseInt(testSquare[1])-i > 0) {
        try {
            if(document.getElementById(String.fromCharCode(testSquare[0].charCodeAt()+i)+(parseInt(testSquare[1])-i).toString()).innerHTML == "") {
                legal.push(String.fromCharCode(testSquare[0].charCodeAt()+i)+(parseInt(testSquare[1])-i).toString())
            } else {
                if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(testSquare[0].charCodeAt()+i)+(parseInt(testSquare[1])-i).toString())].colour!=pieceColour) {
                    legal.push(String.fromCharCode(testSquare[0].charCodeAt()+i)+(parseInt(testSquare[1])-i).toString())
                }
                break;
            }
        } catch (error) {
            break;
        }
        i++;
    }
    return legal;
}

function checkPerpendicular(testSquare, pieceColour) {
    let legal=[];
    i=1;
    while (testSquare[0].charCodeAt(0)-64-i > 0) {
        try {
            if(document.getElementById(String.fromCharCode(testSquare[0].charCodeAt()-i)+testSquare[1]).innerHTML == "") {
                legal.push(String.fromCharCode(testSquare[0].charCodeAt()-i)+testSquare[1])
            } else {
                if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(testSquare[0].charCodeAt()-i)+testSquare[1])].colour!=pieceColour) {
                    legal.push(String.fromCharCode(testSquare[0].charCodeAt()-i)+testSquare[1])
                }
                break;
            }
        } catch (error) {
            break;
        }
        i++;
    }
    i=1;
    while (testSquare[0].charCodeAt(0)-64+i < 9) {
        try {
            if(document.getElementById(String.fromCharCode(testSquare[0].charCodeAt()+i)+testSquare[1]).innerHTML == "") {
                legal.push(String.fromCharCode(testSquare[0].charCodeAt()+i)+testSquare[1])
            } else {
                if (pieces[pieces.map(function(e) { return e.square; }).indexOf(String.fromCharCode(testSquare[0].charCodeAt()+i)+testSquare[1])].colour!=pieceColour) {
                    legal.push(String.fromCharCode(testSquare[0].charCodeAt()+i)+testSquare[1])
                }
                break;
            }
        } catch (error) {
            break;
        }
        i++;
    }
    i=1;
    while (parseInt(testSquare[1])-i > 0) {
        try {
            if(document.getElementById(testSquare[0]+(parseInt(testSquare[1])-i).toString()).innerHTML == "") {
                legal.push(testSquare[0]+(parseInt(testSquare[1])-i).toString())
            } else {
                if (pieces[pieces.map(function(e) { return e.square; }).indexOf(testSquare[0]+(parseInt(testSquare[1])-i).toString())].colour!=pieceColour) {
                    legal.push(testSquare[0]+(parseInt(testSquare[1])-i).toString())
                }
                break;
            }
        } catch (error) {
            break;
        }
        i++;
    }
    i=1;
    while (parseInt(testSquare[1])+i < 9) {
        try {
            if(document.getElementById(testSquare[0]+(parseInt(testSquare[1])+i).toString()).innerHTML == "") {
                legal.push(testSquare[0]+(parseInt(testSquare[1])+i).toString())
            } else {
                if (pieces[pieces.map(function(e) { return e.square; }).indexOf(testSquare[0]+(parseInt(testSquare[1])+i).toString())].colour!=pieceColour) {
                    legal.push(testSquare[0]+(parseInt(testSquare[1])+i).toString())
                }
                break;
            }
        } catch (error) {
            break;
        }
        i++;
    }
    return legal;
}

function moveDropDown() {
    let options="";
    let pieceLocation;
    let selected = document.getElementById("pieceSelect").options[document.getElementById("pieceSelect").selectedIndex].text;
    let legalDropDown = [];
    legalDropDown = pieces[pieces.map(function(e) { return e.square; }).indexOf(selected)].checkLegalMoves();
    for (k=0;k<legalDropDown.length;k++) {
        oldPiece = true
        if(document.getElementById(legalDropDown[k]).innerHTML=="") {
            oldPiece = false;
            document.getElementById(legalDropDown[k]).innerHTML=document.getElementById(selected).innerHTML;
            document.getElementById(selected).innerHTML="";
        } else if (turn % 2 == 0) {
            tempInnerHTML = document.getElementById(legalDropDown[k]).innerHTML;
            temp = pieces[pieces.map(function(e) { return e.square; }).indexOf(legalDropDown[k])];
            pieceLocation = pieces.map(function(e) { return e.square; }).indexOf(legalDropDown[k]);
            pieces[pieces.map(function(e) { return e.square; }).indexOf(legalDropDown[k])]="";
            document.getElementById(legalDropDown[k]).innerHTML=document.getElementById(selected).innerHTML;
            document.getElementById(selected).innerHTML="";
        } else {
            tempInnerHTML = document.getElementById(legalDropDown[k]).innerHTML;
            temp = pieces[pieces.map(function(e) { return e.square; }).indexOf(legalDropDown[k])];
            pieceLocation = pieces.map(function(e) { return e.square; }).indexOf(legalDropDown[k]);
            pieces[pieces.map(function(e) { return e.square; }).indexOf(legalDropDown[k])]="";
            document.getElementById(legalDropDown[k]).innerHTML=document.getElementById(selected).innerHTML;
            document.getElementById(selected).innerHTML="";
        }
        oldSquare = pieces[pieces.map(function(e) { return e.square; }).indexOf(selected)].square;
        pieces[pieces.map(function(e) { return e.square; }).indexOf(selected)].square = legalDropDown[k];
        checks = inCheck();
        if(checks.length == 0) {
            options += "<option>"+legalDropDown[k]+"</option>";
        }
        pieces[pieces.map(function(e) { return e.square; }).indexOf(legalDropDown[k])].square = oldSquare;
        if (oldPiece) {
            pieces[pieceLocation]=temp;
            document.getElementById(selected).innerHTML=document.getElementById(legalDropDown[k]).innerHTML;
            document.getElementById(legalDropDown[k]).innerHTML=tempInnerHTML;
        } else {
            document.getElementById(selected).innerHTML=document.getElementById(legalDropDown[k]).innerHTML;
            document.getElementById(legalDropDown[k]).innerHTML="";
        }
        if(document.getElementById(selected).innerHTML.charCodeAt()==9817 && legalDropDown[k][1]=="8") {
            document.getElementById("promotionSelect").hidden = false;
            document.getElementById("promotionText").hidden = false;
        } else if (document.getElementById(selected).innerHTML.charCodeAt()==9823 && legalDropDown[k][1]=="1") {
            document.getElementById("promotionSelect").hidden = false;
            document.getElementById("promotionText").hidden = false;
        } else {
            document.getElementById("promotionSelect").hidden = true;
            document.getElementById("promotionText").hidden = true;
        }
    }
    document.getElementById("moveSelect").innerHTML = options;
}

function submitMove() {
    selectedPiece = document.getElementById("pieceSelect").options[document.getElementById("pieceSelect").selectedIndex].text;
    selectedSquare = document.getElementById("moveSelect").options[document.getElementById("moveSelect").selectedIndex].text;
    let flagRegular = true;
    let flagEnPassant = false;
    let promotionPiece = "";
    if(document.getElementById(selectedPiece).innerHTML.charCodeAt()==9817 && selectedSquare[1]=="8") {
        promotionPiece = document.getElementById("promotionSelect").options[document.getElementById("promotionSelect").selectedIndex].text;
    } else if (document.getElementById(selectedPiece).innerHTML.charCodeAt()==9823 && selectedSquare[1]=="1") {
        promotionPiece = document.getElementById("promotionSelect").options[document.getElementById("promotionSelect").selectedIndex].text;
    }
    if (selectedPiece == "E1" && document.getElementById(selectedPiece).innerHTML.charCodeAt() == 9812 && pieces[pieces.map(function(e) { return e.square; }).indexOf(selectedPiece)].moved == false){
        if (selectedSquare == "C1") {
            pieces[pieces.map(function(e) { return e.square; }).indexOf("E1")].square="C1";
            document.getElementById("C1").innerHTML=document.getElementById("E1").innerHTML;
            document.getElementById("E1").innerHTML="";
            pieces[pieces.map(function(e) { return e.square; }).indexOf("C1")].moved = true;
            pieces[pieces.map(function(e) { return e.square; }).indexOf("A1")].square="D1";
            document.getElementById("D1").innerHTML=document.getElementById("A1").innerHTML;
            document.getElementById("A1").innerHTML="";
            pieces[pieces.map(function(e) { return e.square; }).indexOf("D1")].moved = true;
            flagRegular = false;
        } else if (selectedSquare == "G1") {
            pieces[pieces.map(function(e) { return e.square; }).indexOf("E1")].square="G1";
            document.getElementById("G1").innerHTML=document.getElementById("E1").innerHTML;
            document.getElementById("E1").innerHTML="";
            pieces[pieces.map(function(e) { return e.square; }).indexOf("G1")].moved = true;
            pieces[pieces.map(function(e) { return e.square; }).indexOf("H1")].square="F1";
            document.getElementById("F1").innerHTML=document.getElementById("H1").innerHTML;
            document.getElementById("H1").innerHTML="";
            pieces[pieces.map(function(e) { return e.square; }).indexOf("F1")].moved = true;
            flagRegular = false;
        }
    } else if (selectedPiece == "E8" && document.getElementById(selectedPiece).innerHTML.charCodeAt() == 9818 && pieces[pieces.map(function(e) { return e.square; }).indexOf(selectedPiece)].moved == false){
        if (selectedSquare == "C8") {
            pieces[pieces.map(function(e) { return e.square; }).indexOf("E8")].square="C8";
            document.getElementById("C8").innerHTML=document.getElementById("E8").innerHTML;
            document.getElementById("E8").innerHTML="";
            pieces[pieces.map(function(e) { return e.square; }).indexOf("C8")].moved = true;
            pieces[pieces.map(function(e) { return e.square; }).indexOf("A8")].square="D8";
            document.getElementById("D8").innerHTML=document.getElementById("A8").innerHTML;
            document.getElementById("A8").innerHTML="";
            pieces[pieces.map(function(e) { return e.square; }).indexOf("D8")].moved = true;
            flagRegular = false;
        } else if (selectedSquare == "G8") {
            pieces[pieces.map(function(e) { return e.square; }).indexOf("E8")].square="G8";
            document.getElementById("G8").innerHTML=document.getElementById("E8").innerHTML;
            document.getElementById("E8").innerHTML="";
            pieces[pieces.map(function(e) { return e.square; }).indexOf("G8")].moved = true;
            pieces[pieces.map(function(e) { return e.square; }).indexOf("H8")].square="F8";
            document.getElementById("F8").innerHTML=document.getElementById("H8").innerHTML;
            document.getElementById("H8").innerHTML="";
            pieces[pieces.map(function(e) { return e.square; }).indexOf("F8")].moved = true;
            flagRegular = false;
        }
    }
    if (flagRegular) {
        try {
            pieces[pieces.map(function(e) { return e.square; }).indexOf(selectedPiece)].moved = true;
        } catch (error) {
        }
        if (document.getElementById(selectedPiece).innerHTML.charCodeAt() == 9817) {
            if(parseInt(selectedSquare[1])==parseInt(selectedPiece[1])+2) {
                enPassant = selectedSquare[0]+(parseInt(selectedPiece[1])+1).toString();
                flagEnPassant = true;
            }
        } else if (document.getElementById(selectedPiece).innerHTML.charCodeAt() == 9823) {
            if(parseInt(selectedSquare[1])==parseInt(selectedPiece[1])-2) {
                enPassant = selectedSquare[0]+(parseInt(selectedPiece[1])-1).toString();
                flagEnPassant = true;
            }
        }
        if (document.getElementById(selectedSquare).innerHTML=="") {
            if(selectedSquare == enPassant) {
                if(turn % 2 == 0) {
                    takenEnPassant = selectedSquare[0]+(parseInt(selectedSquare[1])-1).toString();
                    document.getElementById("white").innerHTML = parseInt(document.getElementById("white").innerHTML) + 1;
                } else {
                    takenEnPassant = selectedSquare[0]+(parseInt(selectedSquare[1])+1).toString();
                    document.getElementById("black").innerHTML = parseInt(document.getElementById("black").innerHTML) + 1;
                }
                pieces[pieces.map(function(e) { return e.square; }).indexOf(takenEnPassant)]="";
                document.getElementById(takenEnPassant).innerHTML = "";
            }
        } else if (turn % 2 == 0) {
            pieces[pieces.map(function(e) { return e.square; }).indexOf(selectedSquare)]="";
            for (i=0;i<piecePoints.length;i++) {
                if(document.getElementById(selectedSquare).innerHTML.charCodeAt()==piecePoints[i][1]) {
                    document.getElementById("white").innerHTML = parseInt(document.getElementById("white").innerHTML) + piecePoints[i][2];
                }
            }
        } else {
            pieces[pieces.map(function(e) { return e.square; }).indexOf(selectedSquare)]="";
            for (i=0;i<piecePoints.length;i++) {
                if(document.getElementById(selectedSquare).innerHTML.charCodeAt()==piecePoints[i][0]) {
                    document.getElementById("black").innerHTML = parseInt(document.getElementById("black").innerHTML) + piecePoints[i][2];
                }
            }
        }
        pieces[pieces.map(function(e) { return e.square; }).indexOf(selectedPiece)].square=selectedSquare;
        document.getElementById(selectedSquare).innerHTML=document.getElementById(selectedPiece).innerHTML;
        document.getElementById(selectedPiece).innerHTML="";
        if (promotionPiece != "") {
            pieceIndex = pieces.map(function(e) { return e.square; }).indexOf(selectedSquare);
            if(turn % 2 == 0) {
                newColour = "white";
            } else {
                newColour = "black";
            }
            if (promotionPiece == "Knight") {
                pieces[pieceIndex] = new Knight(selectedSquare, newColour);
            } else if (promotionPiece == "Bishop") {
                pieces[pieceIndex] = new Bishop(selectedSquare, newColour);
            } else if (promotionPiece == "Rook") {
                pieces[pieceIndex] = new Rook(selectedSquare, newColour);
            } else if (promotionPiece == "Queen") {
                pieces[pieceIndex] = new Queen(selectedSquare, newColour);
            }
        }
    }
    if (!flagEnPassant) {
        enPassant = "";
    }
    turn = turn + 1;
    if (turn % 2 == 0) {
        document.getElementById("turn").innerHTML="Turn: White";
    } else {
        document.getElementById("turn").innerHTML="Turn: Black";
    }
    dropDown();
    moveDropDown();
    checks = inCheck();
    if (checks.length != 0) {
        document.getElementById("checkmate").hidden = false;
        if (turn % 2 == 0) {
            document.getElementById("checkmate").innerHTML = "White is in check!";
        } else {
            document.getElementById("checkmate").innerHTML = "Black is in check!";
        }
    } else {
        document.getElementById("checkmate").hidden = true;
    }
    checkmate();
}

function inCheck() {
    let checks = [];
    if(turn % 2 == 0) {
        kingSquare = pieces[20].square;
    } else {
        kingSquare = pieces[28].square;
    }
    // PAWNS
    if(turn % 2 == 0) {
        selectedSquare = String.fromCharCode(kingSquare[0].charCodeAt()-1)+(parseInt(kingSquare[1])+1).toString();
        for(i=0;i<2;i++) {
            try {
                if(document.getElementById(selectedSquare).innerHTML == "") {
                } else {
                    if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9823) {
                        checks.push(selectedSquare);
                    }
                }
                selectedSquare = String.fromCharCode(kingSquare[0].charCodeAt()+1)+(parseInt(kingSquare[1])+1).toString();
            } catch(error) {
            }
        }
    } else {
        selectedSquare = String.fromCharCode(kingSquare[0].charCodeAt()-1)+(parseInt(kingSquare[1])-1).toString();
        for(i=0;i<2;i++) {
            try {
                if(document.getElementById(selectedSquare).innerHTML == "") {
                } else {
                    if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9817) {
                        checks.push(selectedSquare);
                    }
                }
                selectedSquare = String.fromCharCode(kingSquare[0].charCodeAt()+1)+(parseInt(kingSquare[1])-1).toString();
            } catch (error) {
            }
        }
    }
    // END OF PAWNS
    // KNIGHTS
    let moves = [[-2,-1,1,2,2,1,-1,-2],[1,2,2,1,-1,-2,-2,-1]];
    for(i=0;i<8;i++) {
        try {
            selectedSquare = String.fromCharCode(kingSquare[0].charCodeAt()+moves[0][i])+(parseInt(kingSquare[1])+moves[1][i]).toString();
            if(document.getElementById(selectedSquare).innerHTML == "") {
            } else {
                if(turn % 2 == 0) {
                    if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9822) {
                        checks.push(selectedSquare);
                    }
                } else {
                    if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9816) {
                        checks.push(selectedSquare);
                    }
                }
            }
        } catch (error) {
        }
    }
    // END OF KNIGHTS
    // BISHOPS
    takenSquares = checkDiagonal(kingSquare, pieces[pieces.map(function(e) { return e.square; }).indexOf(kingSquare)].colour)
    for(i=0;i<takenSquares.length;i++) {
        selectedSquare = takenSquares[i];
        if(turn % 2 == 0) {
            if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9821) {
                checks.push(selectedSquare);
            }
        } else {
            if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9815) {
                checks.push(selectedSquare);
            }
        }
    }
    // END OF BISHOPS
    // ROOKS
    takenSquares = checkPerpendicular(kingSquare, pieces[pieces.map(function(e) { return e.square; }).indexOf(kingSquare)].colour)
    for(i=0;i<takenSquares.length;i++) {
        selectedSquare = takenSquares[i];
        if(turn % 2 == 0) {
            if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9820) {
                checks.push(selectedSquare);
            }
        } else {
            if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9814) {
                checks.push(selectedSquare);
            }
        }
    }
    // END OF ROOKS
    // QUEENS
    takenSquares = checkPerpendicular(kingSquare, pieces[pieces.map(function(e) { return e.square; }).indexOf(kingSquare)].colour)
    takenSquares = takenSquares.concat(checkDiagonal(kingSquare, pieces[pieces.map(function(e) { return e.square; }).indexOf(kingSquare)].colour))
    for(i=0;i<takenSquares.length;i++) {
        selectedSquare = takenSquares[i];
        if(turn % 2 == 0) {
            if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9819) {
                checks.push(selectedSquare);
            }
        } else {
            if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9813) {
                checks.push(selectedSquare);
            }
        }
    }
    // END OF QUEENS
    // KINGS (they cannot check but also cannot go within 1 square of each other)
    moves = [[-1,0,1,1,1,0,-1,-1],[1,1,1,0,-1,-1,-1,0]];
    for(i=0;i<8;i++) {
        try {
            selectedSquare = String.fromCharCode(kingSquare[0].charCodeAt()+moves[0][i])+(parseInt(kingSquare[1])+moves[1][i]).toString();
            if(document.getElementById(selectedSquare).innerHTML == "") {
            } else {
                if(turn % 2 == 0) {
                    if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9818) {
                        checks.push(selectedSquare);
                    }
                } else {
                    if (document.getElementById(selectedSquare).innerHTML.charCodeAt() == 9812) {
                        checks.push(selectedSquare);
                    }
                }
            }
        } catch (error) {
        }
    }
    // END OF KINGS
    return checks;
}

function clickBoard(clickedSquare) {
    for (i=0;i<document.getElementById("pieceSelect").options.length;i++) {
        if(document.getElementById("pieceSelect").options[i].text == clickedSquare) {
            document.getElementById("pieceSelect").selectedIndex = i;
        }
    }
    moveDropDown();
    for(j=0;j<document.getElementById("moveSelect").options.length;j++) {
        if(document.getElementById("moveSelect").options[j].text == clickedSquare) {
            document.getElementById("moveSelect").selectedIndex = j;
        }
    }
}

function checkmate() {
    for (l=0;l<document.getElementById("pieceSelect").options.length;l++) {
        document.getElementById("pieceSelect").selectedIndex = l;
        moveDropDown();
        if (document.getElementById("moveSelect").options.length != 0) {
            return;
        }
    }
    document.getElementById("pieceText").hidden = true;
    document.getElementById("pieceSelect").hidden = true;
    document.getElementById("moveText").hidden = true;
    document.getElementById("moveSelect").hidden = true;
    document.getElementById("submit").hidden = true;
    document.getElementById("checkmate").hidden = false;
    checks = inCheck();
    if (checks.length == 0) {
        document.getElementById("checkmate").innerHTML = "Stalemate: it's a draw."
    } else if (turn % 2 == 0) {
        document.getElementById("checkmate").innerHTML = "Black wins by checkmate!";
    } else {
        document.getElementById("checkmate").innerHTML = "White wins by checkmate!";
    }
}

function updateColour() {
    colour = document.getElementById("colourSelect").options[document.getElementById("colourSelect").selectedIndex].text;
    elements = document.querySelectorAll('.boardSpan');
    for(i=0;i<elements.length;i++) {
        elements[i].classList.remove('boardSpanBlue', 'boardSpanRed', 'boardSpanGreen', 'boardSpanGrey', 'boardSpanPurple');
        if(colour == "Blue") {
            elements[i].classList.add('boardSpanBlue');
        } else if (colour == "Red") {
            elements[i].classList.add('boardSpanRed');
        } else if (colour == "Green") {
            elements[i].classList.add('boardSpanGreen');
        } else if (colour == "Grey") {
            elements[i].classList.add('boardSpanGrey');
        } else if (colour == "Purple") {
            elements[i].classList.add('boardSpanPurple');
        }
    }
}

initialiseBoard();
let colours = ["white","black"];
let piecePoints=[[9817,9823,1],[9816,9822,3],[9815,9821,3],[9814,9820,5],[9813,9819,9],[9812,9818,100]];
let pieces = [];
let turn = 0;
let enPassant = "";
initialisePawns();
initialisePieces();
dropDown();
moveDropDown();
updateColour();