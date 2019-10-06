class TicTacToe {
    constructor() {
        
        this._field=[
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        


        this._symbols=['o', 'x']
           
        /* 1: 'x',
            0: 'o'
        */
       
        this._current=1;
        this._winner=null;



    }

    getCurrentPlayerSymbol() {
        return this._symbols[this._current];

    }

    nextTurn(rowIndex, columnIndex) {
        /*should properly update class state (change current player, 
        update marks storage etc.)*/
        if(this._field[rowIndex][columnIndex]==null){
            this._field[rowIndex][columnIndex]=this._current;
            let win=this._checkStr(rowIndex, columnIndex, this._current);
            if( win!==false){
                this._winner=win;
            }

            this._current===1?this._current=0: this._current=1;
        } else {
            return false;
        }
    }

    _checkStr(currRow, currCol, current){
        let winner=false;
        
        function count(arr, current){
            let acc=0;
            if (!arr.includes(null)){
                for(let i=0; i<arr.length; i++){
                    if(arr[i]===current){
                        acc++
                    }
                }
                if(acc===3){
                    winner=current;
                    return winner;
                }
            }

            return false;

        }


        let row=this._field[currRow];
        winner=count(row, current);
        if(winner!==false){
            return winner; 
        }
       

        let col=[];
        for(let i=0; i<this._field[currRow].length; i++){
            col.push(this._field[i][currCol])
        }
        winner=count(col, current);

        if(winner!==false){
            return winner; 
        }

        if(currCol===currRow){
            let d1=[];
            for(let i=0; i<this._field[currRow].length; i++){
               d1.push(this._field[i][i])
            }
            winner=count(d1, current);

            if(winner!==false){
                return winner; 
            }
        }

        if(currCol+currRow===this._field[currRow].length-1){
            let d2=[];
            for(let i=0; i<this._field[currRow].length; i++){
                for(let j=0; j<this._field[currRow].length; j++){
                    if(i+j===this._field[currRow].length-1){
                        d2.push(this._field[i][j]);
                    }
                }
            }
            winner=count(d2, current);
            if(winner!==false){
                return winner; 
            }
        }

        return winner;
    
    }

    isFinished() {
        /*should return true if game is finished 
        (e.g. there is a winner or it is a draw)
        */
       if(this._winner!==null || this.noMoreTurns()){
           return true;
       } else {
           return false;
       }

    
    }

    getWinner() {
        /*
        should return winner symbol (x or o) or 
        null if there is no winner yet
        */
        return this._winner===null?null:this._symbols[this._winner];
        

    }

    noMoreTurns() {
        /*
        should return true if there is no more 
        fields to place a x or o
        */
       for(let  i=0; i<this._field.length; i++){
           for(let j=0; j<this._field[i].length; j++){
               if(this._field[i][j]===null){
                   return false;
               }
           }   
       }
       return true;
    }

    isDraw() {
        /*
        should return true if there is no more turns and no winner
        */
       if(this.noMoreTurns()&&this._winner===null){
           return true;
       } else {
           return false;
       }
    }

    getFieldValue(rowIndex, colIndex) {
        return this._field[rowIndex][colIndex]===null?null:this._symbols[this._field[rowIndex][colIndex]];

    }
}




module.exports = TicTacToe;
