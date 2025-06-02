import { Header } from '../../components/Header';
import './styled.css';
import background from '../../assests/background.png.png';


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='conteudo'>
        <img alt='background app' src={background} className='background' />

        <div className='infos' >
          <div>
            <input name='usuario' placeholder='@username' />
            <button>Buscar</button>
          </div>
          <div className='perfil'>
            <img alt='profile-photo' src="" className='profile' />
            <div>
              <h3>wesley </h3>
              <spam>@description </spam>
              <p>description </p>
            </div>
          </div>
          <hr />
          <section>
             <h4> Repositórios </h4>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
