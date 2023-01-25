function Knight (col, row) {
    let position = [col,row];
    const move = [
        [ position[0] + 1, position[1] + 2],
        [ position[0] + 2, position[1] + 1],
        [ position[0] + 2, position[1] - 1],
        [ position[0] + 1, position[1] - 2],
        [ position[0] - 1, position[1] - 2],
        [ position[0] - 2, position[1] - 1],
        [ position[0] - 2, position[1] + 1],
        [ position[0] - 1, position[1] + 2],
        ];
    const fMove = (index) => {
        position = move[index];
    }
    return { position, move, fMove }
}

const knightMoves = (start, end) => {
    if( start === end) {return 0}
    let numMoves = 0;
    return numMoves;
}


let pony = Knight(4,4);
console.log(pony.position);
//pony.position = pony.move[2];
//pony.position = pony.move[7];
console.log(pony.fMove(2));
console.log(pony.fMove(6));
console.log(pony.position);