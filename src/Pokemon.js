import React from "react";

function Pokemon() {
    return (
        <div>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/524.png" alt="Sprite of roggenrola" className="w-75" />
            <h2 className="text-uppercase"> $ 1 - R$ 5,24</h2>
            <h1 className="text-uppercase"> roggenrola </h1>            
            <ul className="list-group text-start">
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Name: roggenrola </li>
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Number: 524 </li>
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Type: rock </li>
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Weight: 18kg </li>
                <li className="list-group-item"> <i className="bi bi-check-lg"></i> Height: 0.4m </li>
            </ul>
            <div className="text-muted"><small>UPDATE 2023-03-14 10:54:28</small></div>
        </div>
    );
  }
  
export default Pokemon;