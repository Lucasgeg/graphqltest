import { gql } from "apollo-boost";
import { Component } from "react";
import { graphql } from "react-apollo";
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
class BookList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="book-list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
