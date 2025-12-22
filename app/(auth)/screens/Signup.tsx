import ellipsepng from "@/assets/images/auth/ellipsegrad.png";
import { KeyboardView, Text, View } from "@/components/Themed";
import BackBtn from "@/components/ui/backBtn";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useAppRouter } from "@/config/route";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function TabTwoScreen() {
    const router = useAppRouter();

    return (
        <KeyboardView style={styles.container}>
            <View style={styles.authGrad}>
                <Image style={styles.gradImg} source={ellipsepng} />
            </View>

            <BackBtn style={{ marginBottom: 40 }} />

            <Text weight="medium" style={styles.signin}>
                Sign up
            </Text>

            <View style={styles.inputsContainer}>
                <Input
                    onChangeText={(e) => console.log(e)}
                    type="name"
                    placeholder="Full name"
                />
                <Input
                    onChangeText={(e) => console.log(e)}
                    type="email"
                    placeholder="example@email.com"
                />
                <Input
                    onChangeText={(e) => console.log(e)}
                    type="password"
                    placeholder="example@email.com"
                />
                <Input
                    onChangeText={(e) => console.log(e)}
                    type="password"
                    placeholder="example@email.com"
                />
            </View>

            <Button content="Sign in" />

            <View style={{ backgroundColor: "transparent", marginTop: 24 }}>
                <Text style={{ opacity: 0.5 }}>OR</Text>
            </View>

            <View
                style={[styles.socialBtn, { backgroundColor: "transparent" }]}
            >
                <Button content="Log in with Google" variant="G" />
                <Button content="Sign in with Facebook" variant="F" />
            </View>

            <View
                style={{
                    backgroundColor: "transparent",
                    marginTop: 40,
                    columnGap: 4,
                    flexDirection: "row",
                }}
            >
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => router.toSignUp()}>
                    <Text style={{ color: "#5669FF" }}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </KeyboardView>
    );
}

const styles = StyleSheet.create({
    inputsContainer: {
        width: "100%",
        marginVertical: 24,
    },
    logo: {
        width: 150,
        objectFit: "contain",
    },
    signin: {
        fontSize: 25,
        textAlign: "left",
        marginRight: "auto",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        position: "relative",
        overflow: "hidden", // Add this to clip gradient
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    socialBtn: {
        marginTop: 24,
        width: "100%",
        rowGap: 20,
    },
    authGrad: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    gradImg: {
        // width: "100%",
        // height: "100%",
        // resizeMode: "contain",
    },
});
