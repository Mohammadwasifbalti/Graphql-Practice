import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import AuthorList from "./components/AuthorList";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  const [tab, settab] = useState("books-list");
  return (
    <ApolloProvider client={client}>
      <Navbar changeTab={(name) => settab(name)} />
      {tab === "books-list" && <BookList />}
      {tab === "authors-list" && <AuthorList />}
      {tab === "add-book" && <AddBook />}
      {tab === "add-author" && <AddAuthor />}
    </ApolloProvider>
  );
}

export default App;
