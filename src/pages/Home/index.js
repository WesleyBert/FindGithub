import { useState } from 'react';
import { Header } from '../../components/Header';
import { ItemList } from '../../components/ItemList';
import './styled.css';
import background from '../../assests/background.png.png';


function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepositorios] = useState(null);

  const getUser = async (userName) => {
    const userData = await fetch(`https://api.github.com/users/${userName}`);
    return await userData.json();
  }

  const getRepos = async (userName) => {
    const resposData = await fetch(`https://api.github.com/users/${userName}/repos`);
    return resposData.json();
  }

  const handleGetData = async () => {
    try {
      const newUser = await getUser(user);
      if (newUser.name) {
        const { avatar_url, name, bio, login } = newUser;
        setCurrentUser({ avatar_url, name, bio, login });

        const newRepo = await getRepos(user);
        setRepositorios(newRepo);
      } else {
        alert('nenhum usúario encontrado!');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar os dados do repositorio');
    }
  }

  return (
    <div className='App'>
      <Header />
      <div className='conteudo'>
        <img alt='background app' src={background} className='background' />

        <div className='infos' >
          <div>
            <input name='usuario' value={user} onChange={e => setUser(e.target.value)} placeholder='@username' />
            <button type='submit' onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className='perfil'>
                <img alt='profile-photo' src={currentUser.avatar_url} className='profile' />
                <div>
                  <h3>{currentUser?.name}</h3>
                  <span>{currentUser?.login} </span>
                  <p>{currentUser.description} </p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <section>
              <>
                <h4 className='repositorio'> Repositórios </h4>
                {repos.map((repo) => (
                  <ItemList key={repo.id} title={repo.name} description={repo.description} />
                ))}
              </>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
