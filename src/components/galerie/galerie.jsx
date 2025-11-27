import datas from '../../data/data.js';
import Card from '../card/card.jsx';
import './galerie.scss';

function Galerie() {
    return (
        <main className='galerie'>
            {datas.map((logement)=> {
                return (
                    <Card 
                        key= {logement.id}
                        id= {logement.id}
                        title= {logement.title}
                        cover= {logement.cover}
                        className='logement-card'
                    />  
                )} 
            )}
        </main>
    )
}

export default Galerie;