// ## Importações de pacotes
import React from 'react';
import { StyleSheet, Image, View} from 'react-native';
/* Importando Helper do Iphone para medir espaçamento/tamanho parte superior e button home */
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// ## Importações internas
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

export default function Main(){
    return (
        <>
        <View style={styles.container}>
            <Header />
                <Content>
                    <Card>
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666" />
                            <Icon name="visibility-off" size={28} color="#666"/>
                        </CardHeader>    
                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$ 197.611,65</Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Tranferência de R$ 20,00 recebida de Gabriel Morais hoje às 06:00h
                            </Annotation>
                        </CardFooter>
                    </Card>           
                </Content>
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

const Content = styled.View`
    flex: 1;
    maxHeight: 400px;
    zIndex: 5;
`;

const Card = styled.View`
    flex:1;
    backgroundColor: #fff;
    borderRadius: 4px;
    marginTop: 0;
    marginHorizontal: 20px;
    height: 100%;

`;

const CardHeader = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    padding: 30px;
`;

const CardContent = styled.View`
    flex: 1;
    paddingTop: 0;
    paddingHorizontal: 30px;
    justifyContent: center;

`;

const Title = styled.Text`
    fontSize: 13px;
    color: #999;
`;

const Description = styled.Text`
    fontSize: 32px;
    marginTop: 3px;
    color: #333;
`;
 
const CardFooter= styled.View`
    padding: 30px;
    background: #eee;
    borderRadius: 4px;
`;

const Annotation = styled.Text`
    fontSize: 12px;
    color: #333;
`;