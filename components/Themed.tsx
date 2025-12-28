/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import Colors from "@/constants/Colors";
import {
    Text as DefaultText,
    View as DefaultView,
    KeyboardAvoidingView,
    Platform,
    useColorScheme,
} from "react-native";

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

interface ThemedKeyboardAvoidingViewProps extends ViewProps {
    lightColor?: string;
    darkColor?: string;
    keyboardVerticalOffset?: number;
}

export function KeyboardView(props: ThemedKeyboardAvoidingViewProps) {
    const {
        style,
        lightColor,
        darkColor,
        keyboardVerticalOffset = 0,
        ...otherProps
    } = props;

    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );

    return (
        <KeyboardAvoidingView
            style={[{ backgroundColor }, style]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={keyboardVerticalOffset}
            {...otherProps}
        />
    );
}

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme() ?? "light";
    // const theme = "light";
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

type FontWeight = "book" | "medium" | "bold";

interface CustomTextProps extends TextProps {
    weight?: FontWeight;
    lightColor?: string;
    darkColor?: string;
}

export function Text({ weight = "book", ...props }: CustomTextProps) {
    const fontFamilies: Record<FontWeight, string> = {
        book: "AirbnbCereal-Book",
        medium: "AirbnbCereal-Medium",
        bold: "AirbnbCereal-Bold",
    };

    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return (
        <DefaultText
            style={[{ color, fontFamily: fontFamilies[weight] }, style]}
            {...otherProps}
        />
    );
}

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

