const chessBoard = require('./index');

test('chessBoard function is defined', () => {
    expect(typeof chessBoard).toEqual('function');
});

test("should have correct number of rows and columns", () => {
    for (let i=0; i<4; i++) {
        let rows = Math.floor(Math.random() * 20 + 1);
        let columns = Math.floor(Math.random() * 20 + 1);
        
        expect(chessBoard(rows, columns).length).toEqual(rows);
        expect(chessBoard(rows, columns)[0].length).toEqual(columns);
      }
});

test("O's and X's should alternate correctly", () => {
    for (let i=0; i<3; i++) {
        let rows = Math.floor(Math.random() * 10 + 2);
        let columns = Math.floor(Math.random() * 10 + 2);
        console.log(rows + " - rows, ",columns + " - columns");
        for (let j=0; j<rows; j+=2) {
          expect(chessBoard(rows, columns)[j][0]).toEqual('O');
          if (j+1 < rows) expect(chessBoard(rows, columns)[j+1][0]).toEqual('X');
        }
      }
});