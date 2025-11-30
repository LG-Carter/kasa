import './logement.scss'
import { useParams } from "react-router-dom";
import { datas } from '../../data/data'
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Collapse from "../../components/collapse/collapse";
import Tag from '../../components/tag/tag.jsx';
import Star from '../../components/star/star.jsx';
import Error from '../error/error.jsx';

export default function Logement() {

	const { id } = useParams();
	const dataLogement = datas.find(data => data.id === id);

	if (!dataLogement) {
		return <div><Error /></div>;
	}

	const name = dataLogement.host.name.split(' ');
    const rating = dataLogement.rating;
	const description = dataLogement.description;
	const equipments = dataLogement.equipments.map((item, index) => (
    <div key={index}>{item}</div>));
	const images = dataLogement.pictures || [];

	return (
		<div className='logement'>
			<Header />
			<Slider imageSlider={images} />
			<main className="logement_main">
				<div className="logement_content">
					<div className="logement_content_infos">
						<h1>{dataLogement.title}</h1>
						<p>{dataLogement.location}</p>
                        <div>
							{dataLogement.tags.map((tag, index) => 
								<Tag key={index} tag={tag}/>
							)}
						</div>
					</div>
					<div className="logement_content_host">
						<div>
							<div className='logement_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataLogement.host.picture} alt="host of this logement" />
						</div>
                        <div className="logement_content_host_stars">
							<Star rating={rating} />
						</div>
					</div>
				</div>
				<div className="logement_collapse">
					<div className="logement_collapse_item">
						<Collapse title={'Description'} content={description}/>
					</div>
					<div className="logement_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>
				</div>
			</main>
		</div>
	)
}