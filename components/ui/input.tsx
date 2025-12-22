import lockpng from "@/assets/images/auth/Lock.png";
import profileimg from "@/assets/images/auth/Profile.png";
import emailpng from "@/assets/images/auth/email.png";
import { Text } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Image,
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    icon?: string;
    type?: "text" | "email" | "password" | "number" | "phone" | "name";
    containerStyle?: object;
}

const Input = ({
    label,
    error,
    icon,
    type = "text",
    containerStyle,
    style,
    ...props
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Configure input based on type
    const getInputConfig = () => {
        switch (type) {
            case "email":
                return {
                    keyboardType: "email-address" as const,
                    autoCapitalize: "none" as const,
                    autoComplete: "email" as const,
                };
            case "password":
                return {
                    secureTextEntry: !isPasswordVisible,
                    autoCapitalize: "none" as const,
                    autoComplete: "password" as const,
                };
            case "number":
                return {
                    keyboardType: "numeric" as const,
                };
            case "phone":
                return {
                    keyboardType: "phone-pad" as const,
                    autoComplete: "tel" as const,
                };
            default:
                return {};
        }
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {/* Label */}
            {/* {label && <Text style={styles.label}>{label}</Text>} */}

            {/* Input Container */}
            <View
                style={[
                    styles.inputContainer,
                    isFocused && styles.inputFocused,
                    error && styles.inputError,
                ]}
            >
                {/* Icon */}
                <Image
                    source={
                        type == "email"
                            ? emailpng
                            : type == "password"
                            ? lockpng
                            : type == "name"
                            ? profileimg
                            : null
                    }
                />

                {/* TextInput */}
                <TextInput
                    style={[styles.input, style]}
                    placeholderTextColor="#999"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...getInputConfig()}
                    {...props}
                />

                {/* Password Toggle */}
                {type === "password" && (
                    <TouchableOpacity
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        style={styles.eyeIcon}
                    >
                        <Ionicons
                            name={isPasswordVisible ? "eye-off" : "eye"}
                            size={20}
                            color="#666"
                        />
                    </TouchableOpacity>
                )}
            </View>

            {/* Error Message */}
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        width: "100%",
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 8,
        color: "#333",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    inputFocused: {
        borderColor: "#5669FF",
        // backgroundColor: "#FFF",
    },
    inputError: {
        borderColor: "#FF4444",
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: "#000",
        fontFamily: "AirbnbCereal-Book",
    },
    eyeIcon: {
        padding: 4,
    },
    errorText: {
        color: "#FF4444",
        fontSize: 12,
        marginTop: 4,
    },
});

export default Input;
