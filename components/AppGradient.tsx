import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';

const AppGradient = ({ children, colors }: { children: React.ReactNode; colors: string[] }) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </LinearGradient>
  );
};

export default AppGradient;
