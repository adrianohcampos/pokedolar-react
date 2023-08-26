import React, { useEffect, useState } from "react";

import Api from './Api';
import Pokemon from './Pokemon';

function App() {

  const [data_pd, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {

      setIsLoading(true);

      try {
        const dolar_info = await Api.getDolar();

        let usd = dolar_info.USD;
        let media = (Number(usd.high) + Number(usd.high)) / 2;
        let dolar = Math.round(media * 100) / 100;
        let real = dolar.toFixed(2);
        let idpokemon = Math.round(dolar * 100);       

        const pokemom = await Api.getPokemon(idpokemon);
        let update = usd.create_date;
        pokemom.money = { dolar, real, update };
        setData(pokemom);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAll()
  }, [])

  return (
    <section className="pricing pt-4 pb-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mx-auto text-center">
            <div className=" px-5 mb-3 mx-3">
              <img src="logo.png" alt="Poke Dólar" className="w-100 logo" />
            </div>
            <div className="card mb-3 mb-lg-2 shadow">
              <div className="card-body">
                {data_pd &&
                  <Pokemon item={data_pd} />
                }

                {isLoading && (
                  <div className="loading">
                    <img src="loading.webp" alt="loading" className="w-75 my-5" />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2 text-center">
              <span >pokedolar.com.br</span>
              <br />
              <small>Developed by <a href="https://acampos.com.br" className="text-dark" target="_blank" rel="noreferrer">Adriano Campos</a> </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;