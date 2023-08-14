import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SecondScreen = () => {
    openAlert = (game) => {
        if (game === 'mobileLegends') {
            alert('You choose Mobile Legends');
        } else if (game === 'pubg') {
            alert('You choose PUBG');
        }
    };

    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'lavender'
        }}>
            <View style={{
                backgroundColor:'skyblue',
                padding:10,
                marginBottom:5,
                borderWidth:3,
                borderStyle:'dashed',
                borderColor:'grey',
                borderRadius:20
            }}>
                <Text style={{
                    textTransform:'uppercase',
                    textDecorationLine:'underline'
                }}>
                    Mobile Legends
                </Text>
            </View>

            <View style={{
                marginBottom:10,
                padding:5,
                backgroundColor:'orange',
                borderWidth:3
            }}>
                <Text>
                    <Text style={{ fontWeight:'bold' }}>Mobile Legends </Text>is a multiplayer online battle arena (MOBA) game. The<Text style={{ color:'red' }}> two
                    opposing teams fight </Text>to reach and destroy the enemy's base while defending
                    their own base for control of a path.
                </Text>
            </View>

            <View>
                <TouchableOpacity style={{
                    backgroundColor:'white',
                    padding:8,
                    margin:8,
                    borderRadius:50,
                    borderWidth:2
                }} onPress={() => openAlert('mobileLegends')}>
                    <Text style={{ color:'lightcoral' }}>
                        Mobile Legends Button
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>
                    VS    
                </Text>
            </View>

            <View style={{
                backgroundColor:'cornflowerblue',
                marginTop:10,
                padding:10,
                borderWidth:3,
                borderStyle:'dotted',
                borderColor:'grey',
                borderRadius:20
            }}>
                <Text style={{
                    color:'white',
                    textTransform:'uppercase',
                    textDecorationLine:'underline'
                }}>
                    PUBG
                </Text>
            </View>

            <View style={{
                marginTop:5,
                padding:5,
                backgroundColor:'pink',
                borderWidth:3
            }}>
                <Text>
                    <Text style={{ fontWeight:'bold' }}>PlayerUnknown's Battlegrounds</Text>, better known as PUBG, is a multiplayer battle royale
                    game in which<Text style={{ color:'green' }}> players drop onto an island </Text>and<Text style={{ color:'blue' }}> fight to be the last one left standing</Text>.
                </Text>
            </View>

            <View>
                <TouchableOpacity style={{
                    backgroundColor:'white',
                    padding:8,
                    margin:8,
                    borderRadius:50,
                    borderWidth:2
                }} onPress={() => openAlert('pubg')}>
                    <Text style={{ color:'lightcoral' }}>
                        PUBG Button
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default SecondScreen;