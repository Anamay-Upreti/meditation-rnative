import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';

const TabsLayout = () => {
  return (
    <View>
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary}}>

        <Tabs.Screen name='nature-meditate' options={{ tabBarLabel: "Meditate"}}/>
      </Tabs>
    </View>
  )
}

export default TabsLayout;