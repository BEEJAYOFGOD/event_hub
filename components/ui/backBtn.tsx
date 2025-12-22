import backBtn from "@/assets/images/arrow-left.png";
import { useAppRouter } from "@/config/route";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const BackBtn = ({ style }: { style?: object }) => {
    const router = useAppRouter();
    return (
        <TouchableOpacity
            style={[styles.backBtnContainer, style]}
            onPress={() => router.back()}
        >
            <Image style={styles.bckBtn} source={backBtn} />
        </TouchableOpacity>
    );
};

export default BackBtn;

const styles = StyleSheet.create({
    backBtnContainer: {
        marginRight: "auto",
    },
    bckBtn: {
        width: 28,
        objectFit: "contain",
        // borderWidth: 12,
    },
});
