import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header(){
    return (
        <View style={styled.container}>
            <ScrollView contentContainerStyle={tabsContainer.contentContainerStyle}>
                <View style={styles.tabItem}>   
                    <Icon name="person-add" size={24} color="#fff" />
                    <Text style={styles.tabText}>Indicar amigos</Text>
                </View>
                <View style={styles.tabItem}>   
                    <Icon name="chat-bubble-outline" size={24} color="#fff" />
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>
                <View style={styles.tabItem}>   
                    <Icon name="arrow-downward" size={24} color="#fff" />
                    <Text style={styles.tabText}>Depositar</Text>
                </View>
                <View style={styles.tabItem}>   
                    <Icon name="arrow-upward" size={24} color="#fff" />
                    <Text style={styles.tabText}>Trasferir</Text>
                </View>
                <View style={styles.tabItem}>   
                    <Icon name="lock" size={24} color="#fff" />
                    <Text style={styles.tabText}>Bloquear cartão</Text>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height:100,
        marginTop: 20,
    },
    tabItem:{
        width: 100,
        height: 100,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 3,
        marginLeft: 10,
        paddingTop: 10,
        justifyContent: "space-between",// faz com que o icon dentro da tabItem esteja aliado totalmente ao topo, e o texto aliado todo abaixo;       
    },
    tabText:{
        fontSize: 13,
        color: "#fff",
    }
});

/* Utilizando o styledCompoponents */
const tabsContainer = styled.ScrollView.attrs({
    contentContainerStyle:{
        horizontal: true, // Garantindo que a ScrollView gire em sentido horizontal
        contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
        showsHorizontalScrollIndicator: false, // Assim ele não irá mostrar a barra de rolagem para a nossa ScroolView
    }
});


