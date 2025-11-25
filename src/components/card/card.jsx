import datas from '../../data/data.js';
import { Link } from 'react-router-dom';
import '../card/card.scss';

  
function Card() {
    return (
        <div className='galerie'>
            <div className='galerie-container'>
            {datas.map((logement)=> (
                <Link to={`/logement/${logement.id}`} className='logement-card'>
                    <img src={logement.cover} alt={logement.title} className='logement-image'/>
                    <h3>{logement.title}</h3>
                </Link>)
            )}
            </div>
        </div>
    )
}
  

export default Card;