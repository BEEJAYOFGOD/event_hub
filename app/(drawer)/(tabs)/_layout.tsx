import { CustomTabBar } from "@/components/Customtab";
import BackBtn from "@/components/ui/backBtn";
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
            <Tabs.Screen
                name="create"
                options={{
                    headerShown: true,
                    headerLeft: () => <BackBtn />,
                    headerTitle: "Create Event",
                    headerTitleAlign: "center",
                    headerLeftContainerStyle: {
                        padding: 12,
                    },
                    headerTitleStyle: {
                        fontSize: 24,
                        fontFamily: "AirbnbCereal-Medium",
                        color: "#120D26",
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#fff",
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: "#F0F0F0",
                    },
                }}
            />
            <Tabs.Screen name="map" options={{ headerShown: false }} />
            <Tabs.Screen name="profile" options={{ headerShown: false }} />

            <Tabs.Screen
                name="screens"
                options={{ href: null }} // Hide from tabs
            />
        </Tabs>
    );
}
