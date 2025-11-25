import Header from '../../components/header/header.jsx'
import './error.scss';


export default function Error() {
	return (
		<div className='notFound'>
			<Header />
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>Oups! La page que vous demandez n'existe pas.</p>
			</div>
		</div>
	)
}

