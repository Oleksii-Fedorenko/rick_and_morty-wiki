import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from './components/Card/Card';
import Filter from './components/Filters/Filter';
import Search from './components/Search/Search';
import './App.css';
import { Pagination } from './components/Pagination/Pagination';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/location" element={<Location />} />
      </Routes>
    </Router>


  );
};

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json());

      updateFetchedData(data);
    })()
  }, [api]);

  return (
    <div className="App">
      <header className="App-header"></header>

      <Search setPageNumber ={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          
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
