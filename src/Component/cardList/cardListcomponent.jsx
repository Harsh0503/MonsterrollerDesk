

// import cardList from "./cardListcomponent";
import Cards from '../Cards/Cards-item';
import './cardlist.style.css'


const cardList = ({monsters}) => (

 <div className="card-list">
    {monsters.map ((monster) => {
     return <Cards monster = {monster}/>
    })}
 </div>

)


export default cardList;