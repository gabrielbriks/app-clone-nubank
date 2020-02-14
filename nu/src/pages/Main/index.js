// ## Importações de pacotes
import React from 'react';
import { StyleSheet, Image, View,Animated, NativeComponent} from 'react-native';
/* Importando Helper do Iphone para medir espaçamento/tamanho parte superior e button home */
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler, State } from 'react-native-gesture-handler'; // Açoes de arrastar

// ## Importações internas
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

export default function Main(){
    let offset = 0; // Ira guardar o valor em pixels de quanto o usuario arrastou para baixo o card Principal
    const translateY = new Animated.Value(0); //o '.Value' permite sofrer alterações, e realizar alterações no CSS; Ñ utilizamos o state por a performace vai ser muito ruim devido a taxa de atualização que esse item irá sofrer

    //Vou poder ter varios eventos;
    //Basicamente ele ira captar o evento de arrastar e passar o valor para a nossa variavel acima
    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY, 
                }
            }
        ],
        {
            //utilizando o drive nativo do reactNative, para animações;
            useNativeDriver: true,
        },
    );

    function onHandlerStateChange(event){
        //Ira fazer com que o card principal dessa de vez para baixo ao atingir um certo ponto
        if(event.nativeEvent.oldState === State.ACTIVE){//Verificando se o estado anterior era 'Active', se true, significa que a animação acabou 
            let opened = false;
            const { translationY } = event.nativeEvent;
            offset += translationY; //Atualizando a var com o valor real de quanto o usuario arrastou o card

            // translateY.setOffset(offset);
            // translateY.setValue(0);
            if(translationY >= 100){
                opened = true;                
            }
            else{
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 395 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                //vai ser executada ao finalizar a an imação
                offset = opened ? 395 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });


        }
    }
    
    return (
        <>
        <View style={styles.container}>
            <Header />
                <Content>
                    <Menu translateY={translateY}/>

                    <PanGestureHandler 
                        onGestureEvent={animatedEvent}
                        onHandlerStateChange={onHandlerStateChange}
                    >
                        <Card style={{
                            transform: [{
                                translateY: translateY.interpolate({
                                    inputRange: [-350, 0, 395],
                                    outputRange: [-50, 0, 395],
                                    extrapolate: 'clamp', //Se estiver fora dos valores acima não deixa executar
                                }),
                            }]
                        }}>
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
                    </PanGestureHandler>

                </Content>
            <Tabs translateY={translateY}/>
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

const Card = styled(Animated.View)`
    flex:1;
    backgroundColor: #fff;
    borderRadius: 4px;
    marginTop: 0;
    marginHorizontal: 20px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
     
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