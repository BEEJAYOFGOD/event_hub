import { Stack } from "expo-router";

export default function AuthLayout() {
    return <RootLayoutNav />;
}

function RootLayoutNav() {
    return (
        <Stack>
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="screens/Signup"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
