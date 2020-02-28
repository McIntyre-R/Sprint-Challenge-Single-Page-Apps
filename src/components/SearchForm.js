import React from "react";
import {Form, Input} from "reactstrap"

export default function SearchForm(props) {
//  console.log(props)

  

  const handleInput = event => {
    props.setQuery(event.target.value);
  };
  return (
    <section className="search-form">
       <Form>
        <Input
          type="text"
          onChange={handleInput}
          value={props.query}
          name="name"
          placeholder="Search"
          autoComplete="off"
        />
      </Form>
    </section>
  );
}
