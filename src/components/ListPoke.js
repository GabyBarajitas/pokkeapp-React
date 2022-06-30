import '../App.css';
import ItemPoke from '../components/ItemPoke';
import pokemons from '../components/data';
import React,{useState} from 'react'

export default function ListPoke() {
  const [items,setItems] = useState(pokemons)

  const deleteItem = (name) => {
    const newItems = items.filter(item => {
      return item.name !== name 
    })
    setItems(newItems)
    console.log(newItems)
    
  }

  const ListaPokemons = items.map ((item, index) => {
    return(
      <ItemPoke
      name = {item.name} 
      type = {item.type} 
      image ={item.sprite}
      key = {index}
      handleDelete={deleteItem}
      />
    ) 
  }
  )

  return (
    <main className="list-pokemons">
    {ListaPokemons}
    </main>
  );

}

