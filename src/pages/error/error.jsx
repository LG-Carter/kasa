import Header from '../../components/header/header.jsx'


function Error(){
    return(
        <div className="error-page">
            <Header />
            <h1>404 - Page Not Found</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
    )
}

export default Error;