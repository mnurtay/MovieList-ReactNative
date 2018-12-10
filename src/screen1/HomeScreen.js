import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, ImageCard, Layout, SearchBar} from '../components/uikit';

const url = 'http://api.tvmaze.com/search/shows?q=spider-man';

export default class HomeScreen extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
    visibleSearchBar: false
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    } catch (e){
      throw e;
    }    
  }

  _onChangeText = text => {
    console.log('text', text)
  }

  render() {
    const { title, data, visibleSearchBar } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        { visibleSearchBar ?
          <SearchBar
            colorRight={'#fff'}
            iconRight='magnify'
            placeholder='Search'
            onChangeText={this._onChangeText}
            onPressRight={() => this.setState({ visibleSearchBar: false })}
            onBlur={() => this.setState({ visibleSearchBar: true })}
          /> :
          <Header
            title={title}
            colorRight={'#fff'}
            iconRight='magnify'
            onPressRight={() => this.setState({ visibleSearchBar: true })}
          />
        }
        <ScrollView>
          <Layout>
            {
              data.map(item => (
                <ImageCard 
                data={item.show} 
                key={item.show.id} 
                onPress={() => navigation.navigate('STARGATE_DETAILS', (item.show))}
                />
              ))
            }
          </Layout> 
        </ScrollView>
      </View>
    );
  }
}