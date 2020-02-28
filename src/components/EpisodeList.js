import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";
import EpisodeCard from "./EpisodeCard";
import { Row, Col } from 'reactstrap';

export default function EpisodeList() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log(response);
        const episodes = response.data.results.filter(episode =>
          episode.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(episodes);
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
            <EpisodeCard data={data} />
            </Col>
          );
        })}
      </Row>
    </div>
  
    </section>
  );
}
