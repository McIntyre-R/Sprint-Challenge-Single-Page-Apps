import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";
import { Row, Col } from 'reactstrap';

export default function CharacterList() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
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
            <CharacterCard data={data} />
            </Col>
          );
        })}
      </Row>
    </div>
  
    </section>
  );
}
