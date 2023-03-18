import "./index.css"
const Square = ({value, changeSqureValue}) => {
    
    return(<button className="square" onClick={changeSqureValue}>{value}</button>)
}

export default Square