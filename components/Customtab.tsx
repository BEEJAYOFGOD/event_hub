import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "./Themed";

export function CustomTabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const isCenter = route.name === "create";

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                // Get icon based on route name
                const getIcon = () => {
                    switch (route.name) {
                        case "explore":
                            return "compass";
                        case "events":
                            return "calendar";
                        case "create":
                            return "add";
                        case "map":
                            return "location";
                        case "profile":
                            return "person";
                        default:
                            return "help-outline";
                    }
                };

                // Get label
                const getLabel = () => {
                    switch (route.name) {
                        case "explore":
                            return "Explore";
                        case "events":
                            return "Events";
                        case "map":
                            return "Map";
                        case "profile":
                            return "Profile";
                        default:
                            return "";
                    }
                };

                if (isCenter) {
                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={styles.centerButton}
                            onPress={onPress}
                        >
                            <View style={styles.centerButtonInner}>
                                <View style={styles.centerButtonIcon}>
                                    <Ionicons
                                        name={getIcon()}
                                        size={18}
                                        color="#5669FF"
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        style={styles.tabItem}
                        onPress={onPress}
                    >
                        <Ionicons
                            name={getIcon()}
                            size={24}
                            color={isFocused ? "#5669FF" : "#C4C4C4"}
                        />
                        <Text
                            style={[
                                styles.tabLabel,
                                isFocused && styles.tabLabelActive,
                            ]}
                        >
                            {getLabel()}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
        position: "relative",
        height: 70,
    },
    tabItem: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
        shadowColor: "#5669FF",
    },
    tabLabel: {
        fontSize: 12,
        color: "#C4C4C4",
        marginTop: 4,
        fontWeight: "500",
    },
    tabLabelActive: {
        color: "#5669FF",
    },
    centerButton: {
        position: "relative",
        top: -20,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    centerButtonInner: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#5669FF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#5669FF",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },

    centerButtonIcon: {
        backgroundColor: "white",
        height: 24,
        borderRadius: 2,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
    },
});
