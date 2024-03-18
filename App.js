import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackView, createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import esqueci from './esqueci/esqueci';
import novasenha from './novasenha';
import cadastre from './cadastrar';
import inicio from './Inicio';
import configuracoes from './Configuracoes';
import sobre from './sobre';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title:'',
          headerTransparent: true,
          headerShown: false,
        }} name='Login' component={Login}/>
        
        <Stack.Screen options={{
          title:'',
          headerTransparent: true,
          headerShown: false,
        }} name='esqueci' component={esqueci}/>
        
        <Stack.Screen options={{
          title:'',
          headerTransparent: true,
          headerShown: false,
        }} name='novasenha' component={novasenha}/>
        
        <Stack.Screen options={{
          title:'',
          headerTransparent: true,
          headerShown: false,
        }} name='cadastre' component={cadastre}/>

        <Stack.Screen options={{
          title:'',
          headerTransparent: true,
          headerShown: false,
        }} name='inicio' component={inicio}/>

        <Stack.Screen options={{
          title:'',
          headerTransparent: true,
          headerShown: false,
        }} name='configuracoes' component={configuracoes}/>

        <Stack.Screen options={{
          title:'',
          headerTransparent: true,
          headerShown: false,
        }} name='sobre' component={sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
