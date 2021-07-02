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

    get getSquare() {
        return this.square;
    }
    
    get hasMoved() {
        return this.moved;
    }

    set destroy() {
        this.onBoard = false;
    }
}

function initialiseBoard() {
    document.getElementById("board").innerHTML = "";
    for (i=8;i>0;i--) {
        document.getElementById("board").innerHTML += "<p>";
        for (j=1;j<9;j++) {
            file = String.fromCharCode(j+64);
            document.getElementById("board").innerHTML += "<span id='"+file+i.toString()+"' class='"+file+" "+i.toString()+"'>"+file+i.toString()+"</span>";
        }
        document.getElementById("board").innerHTML += "</p>";
    }
}
initialiseBoard();
pawns = [];
for (i=1;i<9;i++) {
    pawns.push(+new Pawn(String.fromCharCode(i+64)+"2", false, "white"));
}
for (j=1;j<9;j++) {
    pawns.push(+new Pawn(String.fromCharCode(j+64)+"7", false, "black"));
}

// function convertSquare(square) {
//     console.log(square.charCodeAt(0)-64, parseInt(square.slice(1)));
// }
// convertSquare(pawn1.getSquare);