import cta_png from "@/assets/images/CTA_png.png";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";

const CTA = () => {
    return (
        <View style={styles.ctaView}>
            <View style={styles.imageview}>
                <Image
                    style={styles.ctaImage}
                    source={cta_png}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.ctaLeftView}>
                <Text style={styles.ctahead} weight="medium">
                    Invite your friends
                </Text>
                <Text>Get $20 for ticket</Text>
            </View>

            <TouchableOpacity style={styles.inviteTouch}>
                <Text style={styles.inViteBtn}>INVITE</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CTA;

const styles = StyleSheet.create({
    ctahead: {
        fontSize: 25,
    },
    inviteTouch: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        alignSelf: "flex-start",
        borderRadius: 4,
        backgroundColor: "#08edf5ff",
    },
    inViteBtn: {
        fontSize: 20,
        color: "white",
        fontWeight: "100",
    },
    ctaLeftView: {
        zIndex: 2,
        gap: 8,
        backgroundColor: "transparent",
    },
    ctaImage: {
        width: "100%",
        height: "125%",
        resizeMode: "contain",
    },
    ctaView: {
        rowGap: 12,
        position: "relative",
        padding: 24,
        backgroundColor: "#71dde145",
        overflow: "hidden",
        margin: 24,
        borderRadius: 12,
    },
    imageview: {
        position: "absolute",
        top: 0,
        right: -20,
        bottom: 0,
        width: "85%", // Adjust based on your design
        backgroundColor: "transparent",
        zIndex: 20,
        overflow: "hidden",
    },
});
