import { CustomTabBar } from "@/components/Customtab";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/components/useColorScheme";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#fff", // Set to white
                },
            }}
        >
            <Tabs.Screen
                name="explore"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="events"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
