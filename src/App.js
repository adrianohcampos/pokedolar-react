import React, { useEffect, useState } from "react";
import './App.css';
import Api from './Api';
import Pokemon from './Pokemon';

function App() {


  const [data_pd, setData] = useState(null);  
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {

      // setIsLoading(true);

      try {
        const dolar_info = await Api.getDolar();
        console.log(dolar_info);
        let usd = dolar_info.USD;
        let media = Math.sum(usd.high, usd.low) / 2; 
        let dolar = Math.round(media * 100) / 100;
        let real       = dolar.toFixed(2);
        let idpokemon  = dolar * 100;
        console.log(media,dolar);
        // const pokemom = await Api.getPokemon(idpokemon);
        // pokemom.money = {dolar,real};
        // console.log(pokemom);
        // setData(pokemom);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    }

    loadAll()
  }, [])


//   $usd        = json_decode(file_get_contents("https://economia.awesomeapi.com.br/all/USD"));
// $usd = $usd->USD;
// $media      = ($usd->high + $usd->low) / 2;

// $dolar      = ceil($media * 100) / 100;
// $real       = number_format($dolar, 2, ',', '');
// $idpokemon  = $dolar * 100;
// $pokemon    = json_decode(file_get_contents("https://pokeapi.co/api/v2/pokemon/" . $idpokemon));
// $update = false;

// $update = $usd->create_date;

  return (
    <section className="pricing pt-4 pb-2">
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mx-auto text-center">
                  <div className=" px-5 mb-3 mx-3">
                    <img src="logo.png" alt="Poke Dólar" className="w-100 logo" />                      
                  </div>
                  <div className="card mb-3 mb-lg-2 shadow">
                      <div className="card-body pokemon ">
                        <Pokemon />
                      </div>
                  </div>
                  <div className="mt-2 text-center"> 
                  <span >pokedolar.com.br</span>
                      <br/> 
                      <small> Inspirado por: <a href="https://geekvox.com.br/" rel="noreferrer" className="text-dark"
                              target="_blank">GeekVox</a> e <a href="https://fb.com/PokeDolar/" rel="noreferrer" className="text-dark" target="_blank">Poke Dólar</a><br/> Desenvolvido por: <a href="https://acampos.com.br" className="text-dark" target="_blank" rel="noreferrer">Adriano Campos</a> </small>
                  </div>
              </div>
          </div>
      </div>
  </section>

  );
}

      export default App;
