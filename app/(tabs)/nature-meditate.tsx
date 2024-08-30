import { View, Text } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { FlatList } from 'react-native-gesture-handler'
import { MEDITATION_DATA } from '@/constants/MeditationData'


const natureMeditate = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className='mb-6 '>
        <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome Sir!</Text>
        <Text>
          Start your meditation practice 
        </Text>
        </View>
        <View>
          <FlatList data={MEDITATION_DATA} className='mb-20 'keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item}) => (
            
          )}
          />
        </View>
      
      </AppGradient>
     
    </View>
  )
}

export default natureMeditate