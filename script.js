let box = '';
let cross = false;
let fieldOccupied = false;
let char = "";
let fields = new Array(9);
let move = 0;

//Set fields value to 0
for(let i=0; i<9; i++){
    fields[i] = 0;
}
function boxNum(number) {
    box = document.getElementById(`box${number}`);
    //toggle variables
    cross = !cross;
    fieldOccupied = true;
  
    //check if current field is already taken.
    if (fieldOccupied) {
      box.style.cursor = 'not-allowed';
      box.style.pointerEvents = 'none';
    }
    
    //Check if it's X or O
    if (cross) {
      char = `<div class="char">X</div>`;
      currentChar = 1;
    } else {
      char = `<div class="char">O</div>`;
      currentChar = 10;
    }
    insert(char);

    //insert cross or ring to the square
    function insert(char) {
        box.innerHTML = char;
        box.value = currentChar;
    }
    
    //pass values to the array
    if(cross){
        fields[number - 1] = 1;
    } else {
        fields[number - 1] = 10;
    }

    //checks if it's draw or not
    move++;
    console.log(move)
    if(fields.includes(0) || move == 9) {
        if(
            //check if X won 
            //horizontally
            fields[0] + fields[1] + fields[2] == 3 ||
            fields[3] + fields[4] + fields[5] == 3 ||
            fields[6] + fields[7] + fields[8] == 3 ||
            // vertically
            fields[0] + fields[3] + fields[6] == 3 ||
            fields[1] + fields[4] + fields[7] == 3 ||
            fields[2] + fields[5] + fields[8] == 3 ||
            //diagonally
            fields[0] + fields[4] + fields[8] == 3 ||
            fields[6] + fields[4] + fields[2] == 3 
            ) {
            if (confirm("X wins")) {
                location.reload();
            } else {
                location.reload();
            }
        } else if (
            //check if O won
            //horizontally
            fields[0] + fields[1] + fields[2] == 30 ||
            fields[3] + fields[4] + fields[5] == 30 ||
            fields[6] + fields[7] + fields[8] == 30 ||
            // vertically
            fields[0] + fields[3] + fields[6] == 30 ||
            fields[1] + fields[4] + fields[7] == 30 ||
            fields[2] + fields[5] + fields[8] == 30 ||
            //diagonally
            fields[0] + fields[4] + fields[8] == 30 ||
            fields[6] + fields[4] + fields[2] == 30
        ) {
            if (confirm("O wins")) {
                location.reload();
            } else {
                location.reload();
            }
        } else if(move == 9) {
            if (confirm("Draw")) {
                location.reload();
            } else {
                location.reload();
            } 
        }
    /*
    console.log(`Field number: ${number}
    It's value: ${fields[number - 1]}`)

    console.log(fields);
    */
} else {
    if (confirm("Draw")) {
        location.reload();
    } else {
        location.reload();
    }
}}

