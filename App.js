import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './src/screens/MainScreen';
import TTS from './src/components/TTS';
import SpellList from './src/components/SpellList';
import IndividualSpell from './src/components/IndividualSpell';
import SpellTypes from './src/components/SpellTypes';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                {/* <Stack.Screen name='TTS' component={TTS} screenOptions={{ headerShown: false }} />
                <Stack.Screen name='Welcome' component={MainScreen} screenOptions={{ headerShown: false }} /> */}
                <Stack.Screen name='SpellTypes' component={SpellTypes} options={{ headerShown: false }} />
                <Stack.Screen name='SpellList' component={SpellList} options={{ headerShown: false }} />
                <Stack.Screen name='IndividualSpell' component={IndividualSpell} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
