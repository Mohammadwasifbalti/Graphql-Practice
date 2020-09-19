import { gql } from "apollo-boost";

export const getBookQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;
export const getAuthorQuery = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;
export const GetSpecificBook = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      id
      author {
        name
        age
        books {
          name
        }
      }
    }
  }
`;
export const GetSpecificAuthor = gql`
  query($id: ID!) {
    author(id: $id) {
      name
      age
      id
      books {
        name
        genre
      }
    }
  }
`;
export const ADDBOOK = gql`
  mutation($name: String!, $genre: String!, $authId: ID!) {
    addBooks(name: $name, genre: $genre, authId: $authId) {
      name
      genre
      id
    }
  }
`;
export const ADDAUTHOR = gql`
  mutation($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;
