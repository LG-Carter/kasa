import './logement.scss'
import { useParams } from "react-router-dom";
import { datas } from '../../data/data'
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Collapse from "../../components/collapse/collapse";
import Error from '../error/error.jsx';

export default function Logement() {

	const { id } = useParams();
	const dataLogement = datas.find(data => data.id === id);

	if (!dataLogement) {
		return <div><Error /></div>;
	}

	const name = dataLogement.host.name.split(' ');
	const description = dataLogement.description;
	const equipments = dataLogement.equipments;
	const images = dataLogement.pictures || [];

	return (
		<div className='accomodation_wrapper'>
			<Header />
			<Slider imageSlider={images} />
			<main className="logement_main">
				<div className="logement_content">
					<div className="logement_content_infos">
						<h1>{dataLogement.title}</h1>
						<p>{dataLogement.location}</p>
					</div>
					<div className="logement_content_host">
						<div>
							<div className='logement_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataLogement.host.picture} alt="host of this logement" />
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description}/>
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>
				</div>
			</main>
		</div>
	)
}