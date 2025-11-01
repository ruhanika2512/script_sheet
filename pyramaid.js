function pyramid(row) {
    let i, j;
    for (i = 0; i < row; i++) {
        let space = "";
        
        for (j = 0; j < row - i - 1; j++) {
            space += " ";
        }
    
        for (j = 0; j < 2 * i + 1; j++) {
            space += "*";
        }
        console.log(space);
    }
}
pyramid(10);