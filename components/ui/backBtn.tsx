import backBtn_lighht from "@/assets/icons/backBtn-light.png";
import backBtn from "@/assets/images/arrow-left.png";
import { useAppRouter } from "@/config/route";
import { useTheme } from "@/hooks/useTheme";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const BackBtn = ({ style }: { style?: object }) => {
    const router = useAppRouter();
    const theme = useTheme();

    const isDark = theme === "dark";

    return (
        <TouchableOpacity
            style={[styles.backBtnContainer, style]}
            onPress={() => router.back()}
        >
            <Image
                style={styles.bckBtn}
                source={!isDark ? backBtn_lighht : backBtn}
            />
        </TouchableOpacity>
    );
};

export default BackBtn;

const styles = StyleSheet.create({
    backBtnContainer: {
        marginRight: "auto",
    },
    bckBtn: {
        width: 20,
        objectFit: "contain",
        // borderWidth: 12,
    },
});
