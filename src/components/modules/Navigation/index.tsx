import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import appConfig from '../../../../config/app.config';

import { HomeScreen, ProfileScreen } from '../../screens';

import appTabs from '../../../routes';

import styles from './styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function Navigation({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <StatusBar style={appConfig.statusBarStyle} />
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
        
      </NavigationContainer> */}
      <View style={styles.navigation}>
          {
            appTabs.map(tab => 
              <TouchableOpacity 
                key={tab.title} 
                style={styles.button} 
                onPress={() => navigation.navigate(tab.target)}
              >
                {
                  tab.icon ? 
                    <AntDesign style={styles.buttonIcon} name={tab.icon} /> : 
                    <Image style={styles.buttonAvatar} source={{uri: tab.avatar}} />
                }
                <Text style={[styles.buttonLabel, tab.avatar ? styles.profileLabel : null]}>{tab.title}</Text>
              </TouchableOpacity>
            )
          }
        </View>
    </View>
  );
}
