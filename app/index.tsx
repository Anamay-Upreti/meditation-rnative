import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={beachImage}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <LinearGradient
            style={{ flex: 1 }}
            colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
          >
            <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
              <View>
                <Text className="text-center text-white font-bold text-4xl">
                  Simple Meditation
                </Text>
                <Text className="text-center text-white text-regular text-2xl mt-3">
                  Simplifying Meditation For Everyone
                </Text>
              </View>

              <View>
                <CustomButton onPress={() => router.push("/test")} title="Get Started" />
              </View>

              <StatusBar style="light" />
            </SafeAreaView>
          </LinearGradient>
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
