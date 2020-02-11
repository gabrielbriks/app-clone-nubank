import React from 'react';
import { StyleSheet, Image, View} from 'react-native';

/* Importando Helper do Iphone para medir espaçamento/tamanho parte superior e button home */
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
// import { Container } from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

export default function Main(){
    return (
        <>
        <View style={styles.container}>
            <Header />
            <Tabs />
        </View>
        </>
        
        
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8B10AE',
        paddingTop: getStatusBarHeight(),
    },

});