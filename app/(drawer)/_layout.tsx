import user_image from "@/assets/images/user_avatar.png";
import { Text, View } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Image } from "react-native";

function CustomDrawerContent(props: any) {
    const router = useRouter();
    const pathname = usePathname();

    const drawerSections = {
        main: [
            {
                label: "My Profile",
                route: "/profile",
                icon: "person-outline",
                activeRoute: "/profile",
            },
            {
                label: "Message",
                route: "/message",
                icon: "chatbubble-outline",
                activeRoute: "/message",
                badge: 2, // Optional badge count
            },
            {
                label: "Calendar",
                route: "/calendar",
                icon: "calendar-outline",
                activeRoute: "/calendar",
            },
            {
                label: "Bookmark",
                route: "/bookmark",
                icon: "bookmark-outline",
                activeRoute: "/bookmark",
            },
            {
                label: "Contact Us",
                route: "/contact",
                icon: "mail-outline",
                activeRoute: "/contact",
            },
        ],
        settings: [
            {
                label: "Settings",
                route: "/settings",
                icon: "settings-outline",
                activeRoute: "/settings",
            },
            {
                label: "Helps & FAQs",
                route: "/help",
                icon: "help-circle-outline",
                activeRoute: "/help",
            },
        ],
        actions: [
            {
                label: "Sign Out",
                route: "/sign-out",
                icon: "log-out-outline",
                activeRoute: "/sign-out",
                isSignOut: true,
            },
        ],
    };

    const renderDrawerItem = (item: any, index: number) => {
        const isActive = pathname === item.route;

        return (
            <DrawerItem
                key={`${item.route}-${index}`}
                label={item.label}
                labelStyle={{
                    color: isActive ? "#5669FF" : "#000000",
                    fontSize: 16,
                    fontFamily: isActive
                        ? "AirbnbCereal-Medium"
                        : "AirbnbCereal-Book",
                }}
                style={{
                    backgroundColor: isActive ? "#F0F3FF" : "transparent",
                    borderRadius: 8,
                }}
                icon={({ size, color }) => (
                    <Ionicons
                        name={item.icon}
                        size={size}
                        color={isActive ? "#5669FF" : "#767676"}
                    />
                )}
                onPress={() => {
                    router.push(item.route);
                    props.navigation.closeDrawer();
                }}
            />
        );
    };

    return (
        <DrawerContentScrollView {...props}>
            <View style={{ paddingTop: 20 }}>
                <Image
                    source={user_image}
                    style={{ width: 80, resizeMode: "contain" }}
                />

                <Text
                    style={{
                        paddingHorizontal: 20,
                        paddingBottom: 10,
                        fontSize: 12,
                        color: "#767676",
                        fontFamily: "AirbnbCereal-Book",
                    }}
                >
                    MAIN
                </Text>

                {drawerSections.main.map(renderDrawerItem)}

                <Text
                    style={{
                        paddingHorizontal: 20,
                        paddingTop: 20,
                        paddingBottom: 10,
                        fontSize: 12,
                        color: "#767676",
                        fontFamily: "AirbnbCereal-Book",
                    }}
                >
                    ACCOUNT
                </Text>
                {drawerSections.settings.map(renderDrawerItem)}
            </View>
        </DrawerContentScrollView>
    );
}

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: "#fff",
                    width: 280,
                },
                drawerType: "slide",
                overlayColor: "rgba(0, 0, 0, 0.1)",
            }}
        ></Drawer>
    );
}
