import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from './components/Card/Card';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import './App.css';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json());

      updateFetchedData(data);

    })()

  }, [api]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center ubuntu my-4">
          Rick & Morty <span className="text-primary">WiKi</span>
        </h1>
      </header>

      <Search setPageNumber ={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>

          <div className="col-8">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default App;
