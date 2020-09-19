import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getAuthorQuery, ADDBOOK, getBookQuery } from "../queries/queries";
import BookList from "./BookList";

function AddBook(props) {
  console.log(props);
  const authors = props?.GetAuthor?.authors;
  const [name, setname] = useState("");
  const [genre, setgenre] = useState("");
  const [author, setauthor] = useState("null");
  const Submit = (e) => {
    e.preventDefault();
    console.log({ name, genre, authId: author });
    props.addbook({
      variables: {
        name,
        genre,
        authId: author,
      },
      refetchQueries: [{ query: getBookQuery }],
    });
    setname("");
    setauthor("null");
    setgenre("");
  };
  return (
    <div>
      <h1>Add Book</h1>
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
          <label>Genre: </label>
          <input
            value={genre}
            onChange={(e) => setgenre(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Author: </label>
          <select value={author} onChange={(e) => setauthor(e.target.value)}>
            <option value="null" disabled selected>
              Choose one
            </option>
            {authors &&
              authors.map((item, i) => (
                <option value={item.id} key={i}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default compose([
  graphql(getAuthorQuery, { name: "GetAuthor" }),
  graphql(ADDBOOK, { name: "addbook" }),
])(AddBook);
