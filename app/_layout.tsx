import { Slot } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screem
            name="(tabs)"
            options={{ headerShown: false}}
        </Stack>
    );
}