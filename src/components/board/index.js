import Square from "../Square"
import "./index.css"
import {nanoid} from 'nanoid';

const calculateWinner = (squares) => {
    const winnerPatter = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let i = 0; i < winnerPatter.length ;i ++){
        let [a,b,c] = winnerPatter[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
}

const Board = ({XisNext, squares, onPlay}) => {
    const winner = calculateWinner(squares)
    let status
    if(winner){
        status = "winner: " + winner
    }else status = "Next chance: " + (XisNext ? 'X': 'O')

    function changeSqureValue(index){
        if(squares[index] || calculateWinner(squares)){
            return
        }
        let newSquare = [...squares]
        newSquare[index] = XisNext ? 'X' : 'O'
        onPlay(newSquare)
    }

    return(
        <>
        <p>{status}</p>
        <div className="board">
            {squares.map((item,index) => 
            <Square key = {nanoid()} 
            value = {item} 
            changeSqureValue = {()=> changeSqureValue(index)}
            />)}
        </div>
        </>
        
    )
}

export default Board