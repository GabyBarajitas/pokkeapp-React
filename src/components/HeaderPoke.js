import Image from '../img/poke-logo.png';
import '../App.css';

function HeaderPoke() {
  return (
  <header className="header">
    <div className="header-bg"></div>
    <img className="header-logo" src={Image} alt="pokemon-logo"/>
    <nav className="header-search_bar">
      <input type="text" name="search" placeholder="Search" ></input>
      <button type="submit">GO</button>
    </nav>
  </header>
  );
}

export default HeaderPoke;
