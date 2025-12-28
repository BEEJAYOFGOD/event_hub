import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { View } from "./Themed";

type Avatars = {
    avatars: ImageSourcePropType[];
    size?: number;
};

const StackAvatar = ({ avatars, size = 30 }: Avatars) => {
    return (
        <View style={styles.avatarGroup}>
            {avatars.map((avatar, index) => (
                <Image
                    style={[
                        { height: size, width: size },
                        index >= 1 ? { marginLeft: -10 } : null,

                        index < avatars.length
                            ? {
                                  zIndex: 0 + avatars.length - index,
                              }
                            : null,
                    ]}
                    key={index}
                    source={avatar}
                />
            ))}
        </View>
    );
};

export default StackAvatar;

const styles = StyleSheet.create({
    avatarGroup: {
        flexDirection: "row",
        backgroundColor: "transparent",
    },
});
