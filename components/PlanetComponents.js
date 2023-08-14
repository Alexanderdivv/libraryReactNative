import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native';


export const Planet = (props) => {
    const { pict, name, desc } = props;

    return (
            <View style={{
                flexDirection:'row',
                backgroundColor:'wheat',
                margin:16,
                padding:16,
                borderRadius:20,
                borderColor:'green',
                borderWidth:1
            }}>
                <Image style={{
                    width:100,
                    height:100
                }} source={pict}/>

                <View style={{
                    flex:1,
                    margin:8,
                    padding:8,
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight: 'bold'
                    }}>
                        {name}
                    </Text>
                    <Text>
                        {desc}
                    </Text>
                </View>
            </View>
    )
};