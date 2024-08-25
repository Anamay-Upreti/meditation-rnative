import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import beachImage from '@/assets/meditation-images/beach.webp';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={beachImage} resizeMode="cover" style={{ flex: 1 }}>
        <LinearGradient
          style={{ flex: 1 }}
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        > <SafeAreaView>
            <Text>App</Text>
        </SafeAreaView>
         
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
