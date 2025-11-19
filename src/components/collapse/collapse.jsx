import {useState} from 'react';
import cheveron from '../../assets/cheveron.png';
import './collapse.scss';

function Collapse({title, children}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='collapse'>
            <div className='collapse_button' onClick={toggleCollapse}>
                {title}
                <img src={cheveron} alt="truc" />
            </div>
            {isOpen && <div className='collapse_content'>
                {children}
            </div>}
        </div>
        
    )
};

export default Collapse;
