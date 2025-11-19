import { datas } from '../../data/data.js';
import '../card/card.scss';

  
function Card() {
    return (
        <div className='galerie'>
            <div className='galerie-container'>
            {datas.map((logement)=> (
                <div className='logement-card'>
                    <img src={logement.cover} alt={logement.title} className='logement-image'/>
                    <h3>{logement.title}</h3>
                </div>)
            )}
            </div>
        </div>
    )
}
  

export default Card;