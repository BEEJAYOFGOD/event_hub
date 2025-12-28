import { CustomTabBar } from "@/components/Customtab";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#fff",
                },
            }}
        >
            <Tabs.Screen name="explore" options={{ headerShown: false }} />
            <Tabs.Screen name="events" options={{ headerShown: false }} />
            <Tabs.Screen name="create" options={{ headerShown: false }} />
            <Tabs.Screen name="map" options={{ headerShown: false }} />
            <Tabs.Screen name="profile" options={{ headerShown: false }} />

            <Tabs.Screen
                name="screens"
                options={{ href: null }} // Hide from tabs
            />
        </Tabs>
    );
}
