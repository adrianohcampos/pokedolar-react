import React from "react";
import Helmet from "react-helmet";

function Pokemon(item) {

    let type = []
    let types = item.item.types;

    for (let index = 0; index < types.length; index++) {
        type.push(types[index].type.name);
    }

    return (
        <div>
            <Helmet>
                <title>{`PokeDólar - #${item.item.id} ${item.item.name.toUpperCase()}`} </title>
                <meta name="description" content="Clone Netflix in React" />
            </Helmet>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${item.item.id}.png`} alt="Sprite of roggenrola" className="w-75" />
            <h2> $ 1 - R$ {item.item.money.real}</h2>
            <h1> {item.item.name.toUpperCase()} </h1>
            <ul className="list-group text-start">
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Name: {item.item.name} </li>
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Number: {item.item.id} </li>
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Type: {type.join(', ')} </li>
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Weight: {item.item.weight / 10}kg </li>
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Height: {item.item.height / 10}m </li>
            </ul>
            <div className="text-muted"><small>UPDATE {item.item.money.update}</small></div>
        </div>
    );
}

export default Pokemon;