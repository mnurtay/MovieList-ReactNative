// import
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { w, BLUE } from '../../../constants'

// body
const Header = ({ title, onPressLeft, onPressRight, iconLeft, iconRight, colorLeft, colorRight }) =>{
    const { container, textStyle, iconLeftStyle, iconRightStyle } = styles;
    return(
        <View style={container} >
            { iconLeft &&
                <TouchableOpacity onPress={onPressLeft}>
                    <Ionicons name={iconLeft} style={[iconLeftStyle, {color: colorLeft}]}/>
                </TouchableOpacity>
            }
            <Text numberOfLines={1} ellipsizeMode='tail' style={textStyle}>{title}</Text>
            { iconRight &&
                <TouchableOpacity onPress={onPressRight}>
                    <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, {color: colorRight}]}/>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: BLUE,
        height: 90,
        paddingHorizontal: 20,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: '#fff',
        fontSize: 25,
        paddingTop: 45,
        width: w - 75,
        fontFamily: 'Roboto'
    },
    iconLeftStyle: {
        paddingTop: 45,
        fontSize: 35
    },
    iconRightStyle: {
        paddingTop: 44,
        fontSize: 30,
        marginRight: 3
    }
});

// export
export { Header };