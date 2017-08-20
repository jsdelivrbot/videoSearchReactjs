import React, { Component } from 'react';

//create class-based component - allows it to communicate and have added functionality

class SearchBar extends Component { //gives class SearchBar funcitonality of React.Component
  constructor(props){
    super(props);

    this.state = {term: ''}; //only inside constructor fxn we do 'this.state'. outside, we always use 'this.setState'
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


//This is a functional component that simply returns JSX - no ability to communicate with other things
// const SearchBar = () => {
//   return <form><input /><button></button></form>;
// };


export default SearchBar;
