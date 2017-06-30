// Importing React
import React, { Component } from 'react';

// Importing all of the React Components that we're going to use.
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

// Creating the 'Results' component.
class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("this is from the search.js" + nextProps);
    console.log(nextProps.movie);
    this.fetchData(nextProps.movie);
  }

  fetchData(movieInput) {
    fetch('https://www.omdbapi.com/?t=' + movieInput + '&y=&plot=short&apikey=40e9cece')
    .then(response => response.json())
    .then((responseData) => {
      this.setState({ movie: responseData });
    }).catch(err => console.log(err));
  }

  // This is what will be displayed on the page.
  render() {

    // Displaying some selected results from the API call.
    return (
      <View style={styles.item}>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
          Title : 
          </Text>
            { this.state.movie.Title}
            {"\n"}
        </Text>

        <Text>
          <Text style={{ fontWeight: 'bold' }}>
          Year : 
          </Text>
            { this.state.movie.Year}
            {"\n"}
        </Text>

        <Text>
          <Text style={{ fontWeight: 'bold' }}>
          Rating : </Text>
            { this.state.movie.Metascore}
            {"\n"}
        </Text>

        <View>
          <Image style={styles.img} source={{uri: this.state.movie.Poster}} />
        </View>

      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
// Creating Styles.
const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: 'white'
  },
  img: {
    padding: 10,
    margin: 10,
    height: (screenHeight/2),
    width: (screenWidth / 2),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    margin: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    padding: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

// Exporting our component.
export default SearchResults;
