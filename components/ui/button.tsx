import googlePng from "@/assets/images/auth/Google.png";
import facebookPng from "@/assets/images/auth/facebook.png";
import btnArrow from "@/assets/images/buttonArrow.png";

import { ReactNode } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Themed";

interface ButtonProps {
    content?: string;
    children?: ReactNode;
    variant?: "primary" | "secondary" | "G" | "F";
    disabled?: boolean;
    style?: object;
    onPress?: () => void;
    arrow?: boolean;
    width?: string | number;
}

const Button = ({
    content,
    children,
    variant = "primary",
    disabled,
    style,
    onPress,
    arrow = false,
    width = "100%",
}: ButtonProps) => {
    const getImageSource = () => {
        if (variant === "primary" && arrow) return btnArrow;
        if (variant === "G") return googlePng;
        if (variant === "F") return facebookPng;
        return null;
    };

    const imageSource = getImageSource();

    // Render content or children
    const renderContent = () => {
        if (children) {
            return children;
        }

        if (content) {
            return (
                <Text
                    style={[
                        buttonStyles.text,
                        variant === "primary"
                            ? buttonStyles.primaryText
                            : buttonStyles.secondaryText,
                    ]}
                >
                    {content}
                </Text>
            );
        }

        return null;
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                buttonStyles.button,
                { width: width },
                variant === "primary"
                    ? buttonStyles.primary
                    : buttonStyles.secondary,
                disabled && buttonStyles.disabled,
                style,
            ]}
        >
            {renderContent()}

            {imageSource && (
                <Image
                    style={
                        variant === "primary"
                            ? buttonStyles.Image
                            : buttonStyles.social
                    }
                    source={imageSource}
                />
            )}
        </TouchableOpacity>
    );
};

export default Button;

const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: "#5669FF",
        opacity: 0.8,
        paddingVertical: 1,
        paddingHorizontal: 15,
        borderRadius: 16,
        alignItems: "center",
        elevation: 5,
        color: "white",
        flexDirection: "row",
        justifyContent: "center",
    },
    primary: {
        backgroundColor: "#3D56F0",
        color: "white",
    },
    disabled: {
        opacity: 0.5,
    },
    secondary: {
        backgroundColor: "white",
        flexDirection: "row-reverse",
        justifyContent: "center",
        gap: 12,
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
        letterSpacing: -1,
    },
    primaryText: {
        color: "#fff",
        position: "absolute",
    },
    secondaryText: {
        color: "black",
    },
    Image: {
        marginLeft: "auto",
        width: 35,
        objectFit: "contain",
    },
    social: {
        width: 30,
        objectFit: "contain",
    },
});
