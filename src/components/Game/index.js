import { useState } from "react"
import Board from "../board"
import {nanoid} from 'nanoid';

const Game = () => {
    const [XisNext, setXisNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    let currentSquare = history[currentMove]

    function handlePlay(newSquare) {
        const newHistory = [...history.slice(0, currentMove + 1), newSquare]
        setHistory(newHistory)
        setCurrentMove(newHistory.length-1)
        setXisNext((curr) => !curr)
    }

    function jumpTo(move){
        setCurrentMove(move)
        setXisNext(move % 2 === 0)
    }

    const moves = history.map((square, move)=> {
        let discription
        if(move > 0){
            discription = 'Go to move' + move
        }else discription = 'Go to start of the game'

        return(
            <div key={nanoid()}>
                <button onClick={()=> jumpTo(move)}>{discription}</button>
            </div>
        )
    })
    return(
        <>
        <Board XisNext = {XisNext} squares = {currentSquare} onPlay = {handlePlay} />
        {moves}
        </>
    )
}

export default Game