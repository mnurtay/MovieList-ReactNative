import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { w } from '../../../constants';

const ImageBigCard = ({ data }) => {
    const { cover, sub, container } = styles;
    const { image } = data;
    const img = "https"+image.medium.slice(4)
    return (
        <View style={container}>
            <View style={sub}>
                <Image 
                    style={cover}
                    source={{uri: img}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20
    },
    sub: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.4
    },
    cover: {
        width: w / 1.67,
        height: w * 0.9,
        borderRadius: 10
    }
});

export { ImageBigCard };