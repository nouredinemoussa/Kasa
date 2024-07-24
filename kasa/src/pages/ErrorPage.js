import React from 'react';
import { Link } from 'react-router-dom';
import ErrorLogo from '../images/404.png';
import '../style/ErrorPage.css';

function ErrorPage () {
    return <div className='error-content'>
        <img src={ErrorLogo} alt='Erreur 404 page non trouvée' />
        <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='error-link'>Retourner sur la page d'accueil</Link>

    </div>
}

export default ErrorPage;