export default function Moves(props){
 
    return (
        <div>
            <button
            onClick={()=>props.onClick("rock")}>
                <img src="images/rock-emoji.png" className="movePic" />
            </button>
            <button
            onClick={()=>props.onClick("paper")}>
                <img src="images/paper-emoji.png" className="movePic" />
            </button>
            <button
            onClick={()=>props.onClick("scissors")}>
                <img src="images/scissors-emoji.png" className="movePic" />
            </button>
        </div>
    )
}
