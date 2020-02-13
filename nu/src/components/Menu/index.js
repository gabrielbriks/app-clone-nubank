import React from 'react';
import { StyleSheet, Image, View, ScrollView, Animated} from 'react-native';
import styled from 'styled-components/native';
// import QRCode from 'react-native-qrcode';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ translateY }){
    return(
        // horizontal={true} showsHorizontalScrollIndicator={false} 
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
                })
        }}>
            <Code>
                <QRCode 
                    content="https://nubank.com.br"
                    size={80}
                    background="#fff"
                    color= "#8b10AE"                    
                />
            </Code>

            <Nav>
                <NavItem>
                     <Icon name="help-outline" size={28} color="#fff" />
                     <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                     <Icon name="person-outline" size={28} color="#fff" />
                     <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                     <Icon name="credit-card" size={28} color="#fff" />
                     <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                     <Icon name="smartphone" size={28} color="#fff" />
                     <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}

// const styles = StyleSheet.create({
//     scroll:{
//         marginTop: 0,
//         marginHorizontal: 30,
        
//     },
// });

/* ## Components*/

// const containerView = styled.ScrollView.attrs({
//     container:{
//        contentContainerStyle: {  },
//     }
// });


const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
`;
//overflow: hidden
const Code = styled.View`
    
    background: #fff;
    padding: 10px;
    alignSelf: center;
`;

const Nav = styled.View`
    marginTop: 30px;
    borderTopWidth: ${StyleSheet.hairlineWidth}px;
    borderTopColor: rgba(255, 255, 255, 0.8);

`;

const NavItem = styled.View`
    flexDirection: row;
    alignItems: center;
    padding: 12px 0;
    borderBottomWidth: ${StyleSheet.hairlineWidth}px;
    borderBottomColor: rgba(255, 255, 255, 0.8);
`;

const NavText = styled.Text`
    fontSize: 15px;
    color: #fff;
    margin-left: 20px; 
`;

const SignOutButton = styled.TouchableOpacity`
    borderWidth: ${StyleSheet.hairlineWidth}px;
    borderColor: rgba(255, 255, 255, 0.8);
    borderRadius: 4px;
    justifyContent: center;
    alignItems: center;
    padding: 12px;
    marginTop: 15px;
`;

const SignOutButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    fontSize: 13px;
`;