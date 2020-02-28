import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";
import LocationCard from "./LocationCard";
import { Row, Col } from 'reactstrap';

export default function LocationsList() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/")
      .then(response => {
        console.log(response);
        const locations = response.data.results.filter(location =>
          location.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(locations);
      })
      .catch(errors => {
        console.log(errors)
      })
  }, [query]);

  return (
    <section className="character-list"> 
    <SearchForm data={data} query={query} setQuery={setQuery} />
    <div>
      <Row>
        
        {data.map(data => {
          return (
            <Col xs='4'>
            <LocationCard data={data} />
            </Col>
          );
        })}
      </Row>
    </div>
  
    </section>
  );
}
