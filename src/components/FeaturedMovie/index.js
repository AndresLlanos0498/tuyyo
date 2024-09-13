import React from 'react';
import './styles.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

function FeaturedMovie( { item } ) {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }
  let description = item.overview.length > 200 ? item.overview.substring(0, 200) + '...' : item.overview;

  return (
    <section 
        className="featured" 
        style={{
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundImage: `url(https://i.ibb.co/25YKcVZ/Whats-App-Image-2024-09-07-at-12-06-16-AM.jpg)`
        }}
    >
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">Tu y Yo</div>
                
                <div className="featured--info">
                    <div className="featured--points">20/10 puntos</div>
                    <div className="featured--year">13 de Julio 2024</div>
                    <div className="featured--seasons">Primera temporada</div>
                </div>  

                <div className="featured--description">Desde que se conocieron siendo apenas unos adolescentes, su conexión fue innegable, pero la vida, con todos sus giros inesperados, les hizo recorrer caminos separados. Ahora, después de años de aprendizajes, amores y desamores, se reencuentran para descubrir que lo que sentían de adolescentes ha madurado en un amor profundo e inquebrantable. Juntos, deberán enfrentar los desafíos del presente mientras construyen un futuro donde cada recuerdo, cada promesa y cada sueño se entrelazan para crear una historia de amor verdadera.</div>
                <div className="featured--buttons">
                    <a disabled className="featured--watchbutton" href="/13072024"><div><PlayArrowIcon />Reproducir</div></a>
                    <a disabled className="featured--mylistbutton"><div><AddIcon />Agregar a lista</div></a>
                </div>
                <div className="featured--genres"><strong>Generos:</strong> Romance, Comedia, Drama</div>
            </div>
        </div>
    </section>
  );
}

export default FeaturedMovie;
