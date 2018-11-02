// import
import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { w, BLUE } from '../../../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// body
const SearchBar = ({
    onPressRight, 
    iconRight, 
    colorRight, 
    onChangeText,
    placeholder,
    value,
    onBlur 
}) =>{
    const { container, sub, iconRightStyle, inputStyle, searchStyle } = styles;
    return(
        <View style={container} >
            <View style={sub}>
                <TextInput 
                    style={inputStyle} 
                    onChangeText={onChangeText} 
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                    underlineColorAndroid = "transparent"
                />
                <TouchableOpacity onPress={onPressRight}>
                    <View style={searchStyle}>
                        <MaterialCommunityIcons name={iconRight} style={[iconRightStyle, {color: colorRight}]}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: BLUE,
        height: 90,
        paddingHorizontal: 20,
        elevation: 2,
        position: 'relative'
    },
    sub: {
        justifyContent: 'space-between',
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
        width: w-35,
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 20
    },
    inputStyle: {
        fontSize: 18,
        height: 23,
        width: w-90,
        marginLeft: 15,
        backgroundColor: '#fff'
    },
    searchStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconRightStyle: {
        fontSize: 30,
        marginTop: 2
    }
});

// export
export { SearchBar };