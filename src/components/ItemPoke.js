import '../App.css';

function ItemPoke({name,type, image, handleDelete}) {

  return (
    <article className='list-pokemons-item'>
      <div className='list-pokemons-item-content'>
        <img 
        src={image} 
        alt="pokemon-1"
        ></img>
        <h3>{name}
          <span>{type}</span>
        </h3>
        <button onClick={() => handleDelete(name)}>delete</button>
      </div>
    </article>
  );
}



export default ItemPoke;
