import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_KEY = 'AIzaSyBNFGAQHcX5BWfxAl0oxOQ9hGEcgZ3Tk4g';

// create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.videoSearch('surfboards');

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  };
}

// take this component's generated HTML and put it on the page. (in the DOM)
ReactDOM.render(<App />, document.getElementById('app'));
