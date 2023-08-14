import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Planet } from '../components/PlanetComponent';

const SolarSystemScreen = () => {
    clickedPlanet = (planet) => {
        if (planet == 1) {
            alert('You clicked Mercury!!');
        } else if (planet == 2) {
            alert('You clicked Venus!!');
        } else if (planet == 3) {
            alert('You clicked Earth!!');
        } else if (planet == 4) {
            alert('You clicked Mars!!');
        } else if (planet == 5) {
            alert('You clicked Jupiter!!');
        } else if (planet == 6) {
            alert('You clicked Saturn!!');
        } else if (planet == 7) {
            alert('You clicked Uranus!!');
        } else if (planet == 8) {
            alert('You clicked Neptune!!');
        }
    };

    return (
        <View style={{flex:1}}>
            <View style={{padding:10, alignItems:'center'}}>
                <Text style={{fontSize:30, fontFamily:'serif', textDecorationLine:'underline'}}>SOLAR SYSTEM</Text>
            </View>

            <ScrollView>
                <TouchableOpacity onPress={() => clickedPlanet(1)}>
                    <Planet
                        pict={require('../../assets/images/mercury.png')}
                        name="Mercury"
                        desc="Mercury is the fastest planet, zipping around the sun every 88 earth days"
                        click={1}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickedPlanet(2)}>
                    <Planet
                        pict={require('../../assets/images/venus.png')}
                        name="Venus"
                        desc="Venus spins slowly in the opposite direction from most planets"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickedPlanet(3)}>
                    <Planet
                        pict={require('../../assets/images/earth.png')}
                        name="Earth"
                        desc="Earth is the only place we know of so far that's inhabited by living things"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickedPlanet(4)}>
                    <Planet
                        pict={require('../../assets/images/mars.png')}
                        name="Mars"
                        desc="Mars is a dusty, cold, desert world with a very thin atmosphere"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickedPlanet(5)}>
                    <Planet
                        pict={require('../../assets/images/jupiter.png')}
                        name="Jupiter"
                        desc="Jupiter is more than twice as massive than the other planets of our solar system combined"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickedPlanet(6)}>
                    <Planet
                        pict={require('../../assets/images/saturn.png')}
                        name="Saturn"
                        desc="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickedPlanet(7)}>
                    <Planet
                        pict={require('../../assets/images/uranus.png')}
                        name="Uranus"
                        desc="Uranus rotates at a nearly 90-degree angle from the plane of its orbit"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clickedPlanet(8)}>
                    <Planet
                        pict={require('../../assets/images/neptune.png')}
                        name="Neptune"
                        desc="Neptune is dark, cold, and whipped by supersonic winds"
                    />           
                </TouchableOpacity>                  
            </ScrollView>
        </View>
    )
};

export default SolarSystemScreen;