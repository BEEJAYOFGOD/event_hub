// OnboardingContent.tsx
import { Text, View } from "@/components/Themed";
import { StyleSheet, TouchableOpacity } from "react-native";

interface OnboardingContentProps {
    title1: string;
    title: string;
    currentIndex: number;
    totalSlides: number;
    onSkip: () => void;
    onNext: () => void;
}

export const OnboardingContent = ({
    title1,
    title,
    currentIndex,
    totalSlides,
    onSkip,
    onNext,
}: OnboardingContentProps) => {
    return (
        <View style={styles.onboardingBottomView}>
            <Text
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
                style={styles.title1}
                weight="medium"
            >
                {title1}
            </Text>
            <Text
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
                style={styles.title}
            >
                {title}
            </Text>
            <View style={styles.onboardFooter}>
                <TouchableOpacity onPress={onSkip}>
                    <Text style={[styles.buttonText, { opacity: 0.5 }]}>
                        Skip
                    </Text>
                </TouchableOpacity>

                <View style={styles.dotsContainer}>
                    <View style={styles.dots}>
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    index === currentIndex && styles.activeDot,
                                ]}
                            />
                        ))}
                    </View>
                </View>
                <TouchableOpacity onPress={onNext}>
                    <Text weight="bold" style={styles.buttonText}>
                        {currentIndex == 2 ? "Get Started" : "Next"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    onboardingBottomView: {
        backgroundColor: "#5669FF",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        flex: 0.7,
        paddingVertical: 50,
    },
    title1: {
        fontSize: 25,
        marginBottom: 24,
        textAlign: "center",
        width: "80%",
    },
    title: {
        fontSize: 18,
        width: "75%",
        marginBottom: 12,
        textAlign: "center",
    },
    onboardFooter: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "auto",
        backgroundColor: "#5669FF",
    },
    dotsContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
        backgroundColor: "transparent",
        pointerEvents: "none", // Allows buttons to be clickable through this layer
    },
    dots: {
        flexDirection: "row",
        gap: 12,
        backgroundColor: "#5669FF",
    },
    dot: {
        backgroundColor: "rgba(255,255,255,0.3)",
        height: 10,
        width: 10,
        borderRadius: 5,
    },
    activeDot: {
        backgroundColor: "white",
        width: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});
