import React from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';

export default function Header(){
    return (
        <>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image  style={styles.logo} source={logo}/>
                    <Text style={styles.title} >Gabriel</Text>
                </View>
                <Icon name="keyboard-arrow-down" size={20} color="#fff"/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 30, 
    },
    top: {
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        
    },
    title: {
        fontSize:18,
        color:'#fff',
        fontWeight: 'bold',
        marginLeft: 8,
    },

});     