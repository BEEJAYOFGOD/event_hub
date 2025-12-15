import onboard1 from "@/assets/images/auth/onboarding.png";
import { Text, View } from "@/components/Themed";
import { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    ViewToken,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
export default function TabTwoScreen() {
    const scrollRef = useRef(null);
    const [scrollIndex, setScrollIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [onboard1, onboard1, onboard1];

    const onViewableItemsChanged = useRef(
        ({ viewableItems }: { viewableItems: ViewToken[] }) => {
            if (viewableItems.length > 0) {
                setCurrentIndex(() => {
                    console.log(viewableItems);
                    console.log("viewindex", viewableItems[0].index);
                    return viewableItems[0].index ?? 0;
                });
            }
        }
    ).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                ref={scrollRef}
                pagingEnabled
                horizontal
                renderItem={({ item }) => (
                    <Image style={styles.onboardImage} source={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
                style={styles.imageContainer}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />

            <View
                style={styles.onboardingBottomView}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            >
                <Text
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                    style={styles.title1}
                >
                    Explore Upcoming and Neary Events
                </Text>
                <Text
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                    style={styles.title}
                >
                    in publishing and graphic design, Lorem is a placeholdertext
                    commonly
                </Text>
                <View style={styles.onboardFooter}>
                    <TouchableOpacity>
                        <Text>Skip {scrollIndex} </Text>
                    </TouchableOpacity>
                    <View style={styles.dots}>
                        {[1, 2, 3].map((item) => (
                            <View key={item} style={styles.dot} />
                        ))}
                    </View>
                    <TouchableOpacity>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: screenWidth * 1,
        height: "50%",
        marginBottom: -150,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 8,
    },
    onboardImage: {
        width: screenWidth * 1, // matches your 90% container width
        height: "100%",
        objectFit: "contain",
        alignItems: "center",
    },
    imageView: {
        borderColor: "red",
        borderWidth: 3,
        height: 20,
        width: "100%",
    },
    title1: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
        width: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
    },
    onboardingBottomView: {
        backgroundColor: "#5669FF",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
        padding: 24,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        flex: 0.5,
        paddingBottom: 50,
    },
    dot: {
        backgroundColor: "red",
        height: 10,
        width: 10,
    },
    onboardFooter: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: "auto",
        backgroundColor: "#5669FF",
    },
    dots: {
        flexDirection: "row",
        gap: 12,
        backgroundColor: "#5669FF",
    },
});
