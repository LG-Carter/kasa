import './banner.scss';


function Banner({ title, imageUrl }) {
  return (
      <div className="banner">
          <img src={imageUrl} alt={title} className="banner__image" />
          <h1 className="banner__title">{title}</h1>
      </div>
  );
}


export default Banner;