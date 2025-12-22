import onboard2 from "@/assets/images/auth/onboard2.png";
import onboard3 from "@/assets/images/auth/onboard3.png";
import onboard1 from "@/assets/images/auth/onboarding.png";
import { OnboardingContent } from "@/components/onboard/OnboardComponent";
import { View } from "@/components/Themed";
import { useAppRouter } from "@/config/route";
import { useCallback, useMemo, useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    ImageSourcePropType,
    StyleSheet,
    ViewToken,
} from "react-native";

interface OnboardingSlide {
    id: string;
    image: ImageSourcePropType;
    title1: string;
    title: string;
}

const onboardingData: OnboardingSlide[] = [
    {
        id: "1",
        image: onboard1,
        title1: "Explore Upcoming and Nearby Events",
        title: "Find amazing experiences happening around you",
    },
    {
        id: "2",
        image: onboard2,
        title1: "We Have Modern Events Calendar Feature",
        title: "Never miss out with smart reminders and easy planning",
    },
    {
        id: "3",
        image: onboard3,
        title1: "Look Up More Events or Activities Nearby By Map",
        title: "See what's happening around you at a glance",
    },
];

const screenWidth = Dimensions.get("window").width;

export default function TabTwoScreen() {
    const flatListRef = useRef<FlatList<any>>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useAppRouter();

    const onViewableItemsChanged = useCallback(
        ({ viewableItems }: { viewableItems: ViewToken[] }) => {
            if (viewableItems.length > 0) {
                console.log(viewableItems);
                setCurrentIndex(viewableItems[0].index ?? 0);
            }
        },
        [] // Empty dependency array - function never changes
    );

    const viewabilityConfig = useMemo(
        () => ({
            itemVisiblePercentThreshold: 50,
        }),
        []
    );

    const handleSkip = () => {
        router.toSignIn();
    };

    const handleNext = () => {
        if (currentIndex < onboardingData.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
            });
        } else {
            console.log("Get started");
            router.toSignIn();
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={onboardingData}
                ref={flatListRef}
                pagingEnabled
                horizontal
                renderItem={({ item }: { item: OnboardingSlide }) => (
                    <Image style={styles.onboardImage} source={item.image} />
                )}
                keyExtractor={(item, index) => index.toString()}
                style={styles.imageContainer}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />

            <OnboardingContent
                title1={onboardingData[currentIndex].title1}
                title={onboardingData[currentIndex].title}
                currentIndex={currentIndex}
                totalSlides={onboardingData.length}
                onSkip={handleSkip}
                onNext={handleNext}
            />
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
        fontSize: 16,
        fontWeight: "ultralight",
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
