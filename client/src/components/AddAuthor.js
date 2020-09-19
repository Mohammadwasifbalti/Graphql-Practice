import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { ADDAUTHOR } from "../queries/queries";

function AddAuthor(props) {
  console.log(props);
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    console.log({ name, age });
    props.addauthor({
      variables: {
        name,
        age: parseInt(age),
      },
    });
    setname("");
    setage("");
  };
  return (
    <div>
      <h1>Add Author</h1>
      <form onSubmit={(e) => Submit(e)}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            value={age}
            onChange={(e) => setage(e.target.value)}
            type="Number"
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default compose([graphql(ADDAUTHOR, { name: "addauthor" })])(AddAuthor);
