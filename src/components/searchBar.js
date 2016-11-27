import React, { Component } from 'react';

// as a functional component
// const SearchBar = () => {
//  return <input />;
// }

// as a class component - able to aware of itself/ more intelligence
class SearchBar extends Component { // or extends React.Component
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div  className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
