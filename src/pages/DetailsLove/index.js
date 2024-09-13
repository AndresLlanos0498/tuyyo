import React, { useEffect, useState } from 'react';
import TheatersIcon from '@material-ui/icons/Theaters';
import LanguageIcon from '@material-ui/icons/Language';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import iconAmazon from '../../assets/icon-amazon.png';
import iconNetflix from '../../assets/icon-netflix.png';
import './styles.css';
import { Link } from 'react-router-dom';

function DetailsLove(){

    const [movieDetails, setMovieDetails] = useState({});
    const [urlVideo, setUrlVideo] = useState();
    const [videoFullScreen, setVideoFullScreen] = useState(false);
    const [descriptionVideo, setDescriptionVideo] = useState();

    useEffect(() => {
        const loadAll = async () => {
            let movie = ("Desde que se conocieron siendo apenas unos adolescentes, su conexión fue innegable, pero la vida, con todos sus giros inesperad..");
            setMovieDetails(movie);
            setDescriptionVideo("Descubrieron que lo suyo siempre fue amor. Ahora, entre risas, viajes, y alguno que otro conflicto, viven su dia a dia construyendo un futuro juntos.");
            console.log(movie)
        }
        loadAll();
    },)
    
    function handleShowTrailer(){
        if(movieDetails !== undefined && movieDetails.length > 0){
            const url = `https://youtube.com/embed/1TmzXqsdAnI?si=KdU2_VBXmPsCuIre?cc_lang_pref=fr&autoplay=1&cc_load_policy=1&controls=0&showinfo=0&autohide=1`;
            setUrlVideo(url);
        }
    }

    function handleVideoFullScreen(){
        setVideoFullScreen(!videoFullScreen);
    }
    
    
    return (
        <main 
            className="details" 
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://i.ibb.co/K6zyzRR/Whats-App-Image-2024-09-07-at-12-01-44-AM.jpg)`
            }}
        >   
        <Link to="/" className="details--backbutton">Volver</Link>
            <section> 
                <div>
                    <div className="details--info">
                        <h3 className='positive'>100%</h3>
                    </div>

                    <h1>Siempre Nosotros</h1>

                    <h4>{descriptionVideo}</h4>

                    {
                        <a onClick={() => handleShowTrailer()} className="details--viewtrailer"><div><TheatersIcon />Ver Trailer</div></a>
                    }
                     {
                        (movieDetails.homepage !== undefined && movieDetails.homepage !== '') && 
                            <a href={movieDetails.homepage} target="_blank" rel="noopener noreferrer" className="details--officialsite">
                                <div>
                                    {
                                        movieDetails.homepage.includes('netflix') ?
                                        <img alt="Netflix" src={iconNetflix} width="23"/> :
                                        movieDetails.homepage.includes('amazon') ?
                                        <img alt="Amazon" src={iconAmazon} width="23"/> :
                                        <LanguageIcon />
                                    }
                                
                                </div>
                            </a>
                     }
                </div>
            </section>
            {
                urlVideo !== undefined
                &&
                <aside className={videoFullScreen ? 'video--fullscreen' : ''}>
                    <div>
                        <button onClick={() => handleVideoFullScreen()}><AspectRatioIcon /></button>
                    </div>
                    <iframe frameBorder="0" height="100%" width="100%" title="1"
                        src={urlVideo}>
                    </iframe>
                </aside>
            }
        </main>
    )
}

export default DetailsLove;