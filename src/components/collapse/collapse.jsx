import {useState} from 'react';
import cheveron from '../../assets/cheveron.png';
import './collapse.scss';

function Collapse({title, children, content}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='collapse'>
            <div className='collapse_button' onClick={toggleCollapse}>
                {title}
                <img src={cheveron} alt="arrow" className= {!isOpen ? 'collapse_arrow collapse_arrow--open' : 'collapse_arrow'} />
            </div>
            {isOpen && <div className='collapse_content'>
                {children || content}
            </div>}
        </div>
        
    )
};

export default Collapse;
