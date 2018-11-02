import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Header, ImageBigCard } from '../components/uikit';

class DetailsScreen extends React.PureComponent {
    render(){
        const { image, name, summary } = this.props.navigation.state.params
        const { navigation } = this.props
        const data = { image }
        const { container, h1, h2, sub } = styles
        return(
            <View style={container}>
                <Header title={name} 
                    detail
                    onPressLeft={() => navigation.goBack()}
                    iconLeft='ios-arrow-back'
                    colorLeft='#fff'
                />
                <ScrollView>
                    <View style={sub}>
                        <ImageBigCard data={data}/>
                        <Text style={h1}>{ name.toUpperCase() }</Text>
                        <Text style={h2}>{ summary ? summary.replace(/<[^>]+>/g, ''):"" }</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    sub: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 150,
        backgroundColor: '#fff'
    },
    h1: {
        fontFamily: 'Roboto',
        fontSize: 30,
        padding: 15,
        textAlign: 'center'
    },
    h2: {
        fontFamily: 'Roboto',
        fontSize: 15,
        padding: 15,
        textAlign: 'center',
        color: 'grey',
        paddingHorizontal: 20
    }
})

export default DetailsScreen