import React from 'react';
import { View, Text, ImageBackground, TextInput, ScrollView } from 'react-native';
import { InputComponent } from '../components/InputComponent';

const FourthScreen = () => {
    return (
        <ScrollView>
        <View style={{ margin:16 }}>
            <ImageBackground style={{
                width: '100%',
                height: 300,
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }} imageStyle={{ borderRadius:10, opacity:0.5 }}
            source={{ uri:'https://wallpaperaccess.com/full/250180.jpg' }}>

                <Text style={{
                    backgroundColor: 'mistyrose',
                    padding: 8,
                    margin: 8,
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>
                    Disneyland
                </Text>
            </ImageBackground>

            <InputComponent
                title="Description"
                height={140}
                placeholder="About the place"
                multiline={true}
                keyboardType="default"
            />

            <InputComponent
                title="Phone Number"
                height={40}
                placeholder="Phone Number"
                multiline={true}
                keyboardType="numeric"
            />

            <InputComponent
                title="Location"
                height={40}
                placeholder="Location"
                multiline={true}
                keyboardType="default"
            />
        </View>
        </ScrollView>
    )
};

const Challenge4 = () => {
    return (
        <View style={{flex:1}}>
            <ImageBackground
                style={{
                    flex:1,
                    justifyContent:'center'
                }}
                imageStyle={{opacity:0.25}}
                source={{uri:'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg'}}
            >
                <View style={{alignItems:'flex-end'}}>
                    <Text
                        style={{
                            fontWeight:'500',
                            fontSize:12,
                            backgroundColor:'beige',
                            padding:5,
                            margin:5
                        }}
                    >
                        Colosseum
                    </Text>
                </View>
                <View style={{margin:8, padding:8}}>

                    <InputComponent
                        title="Description"
                        height={140}
                        placeholder="About the place"
                        multiline={true}
                        keyboardType="default"
                    />

                    <InputComponent
                        title="Phone Number"
                        height={40}
                        placeholder="Phone Number"
                        multiline={true}
                        keyboardType="numeric"
                    />

                    <InputComponent
                        title="Location"
                        height={40}
                        placeholder="Location"
                        multiline={true}
                        keyboardType="default"
                    />

                </View>
            </ImageBackground>
        </View>
    )
};

export default FourthScreen;
// export default Challenge4;