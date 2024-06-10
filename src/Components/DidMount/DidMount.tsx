import React, { Component } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface DidMountState {
  entries: Post[];
}

export default class DidMount extends Component<{}, DidMountState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  fetch = (apiToFetch: string) => {
    axios.get(apiToFetch)
      .then(result => {
        this.setState({
          entries: result.data
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.fetch('https://jsonplaceholder.typicode.com/posts');
  }

  render() {
    const { entries } = this.state;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {entries.slice(0, 10).map(value => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.userId}</td>
                <td>{value.title}</td>
                <td>{value.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
