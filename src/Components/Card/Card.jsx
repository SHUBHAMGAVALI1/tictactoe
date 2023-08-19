import Icon from "../Icon/Icon";
 import './Card.css';
function Card ({iconname,play,player,index,gameend}){
    let icon=<Icon/>

    if(player=="O"){
        icon=<Icon name="check"/>
    }else if(player=="X"){
        icon=<Icon name="cross"/>
    }
    
return<>
<div className="card" onClick={()=>!gameend && player=="" && play(index)}>
{icon}
</div>
</>
}
export default Card;