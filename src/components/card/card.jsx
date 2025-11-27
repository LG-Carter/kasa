import { Link } from 'react-router-dom';
import './card.scss';

  
function Card({id, title, cover}) {
    return (
        <Link to={`/logement/${id}`} className='logement-card'>
            <img src={cover} alt={title} className='logement-image'/>
            <h3>{title}</h3>
        </Link>
    )    
}
  

export default Card;


/*
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

*/
