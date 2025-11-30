import starInactive from '../../assets/starInactive.png';
import starActive from '../../assets/starActive.png';

export default function Star({ rating }) {

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? starActive : starInactive} alt="star" />
                )
            })}
        </div>
    )
}