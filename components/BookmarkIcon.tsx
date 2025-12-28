import React from "react";
import { Pressable } from "react-native";

interface BookmarkIconProps {
    isBookmarked: boolean;
    onPress: () => void;
    size?: number;
    fill?: string;
}

// const BookmarkIcon = ({
//     isBookmarked,
//     onPress,
//     size = 15,
// }: BookmarkIconProps) => {
//     return (
//         <Pressable onPress={onPress}>
//             <Svg
//                 width={size}
//                 height={size * 0.93}
//                 viewBox="0 0 15 14"
//                 fill="none"
//             >
//                 <Path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M6.78925 10.9783L2.74254 13.0492C2.41944 13.206 2.02139 13.095 1.84327 12.7983V12.7983C1.79174 12.7064 1.76393 12.6046 1.76208 12.5008V3.325C1.76208 1.575 3.04229 0.875 4.88455 0.875H9.21228C10.9983 0.875 12.3347 1.52833 12.3347 3.20833V12.5008C12.3347 12.6664 12.2643 12.8251 12.139 12.9422C12.0137 13.0592 11.8438 13.125 11.6665 13.125C11.5535 13.1233 11.4424 13.0974 11.3418 13.0492L7.27011 10.9783C7.12007 10.9026 6.93929 10.9026 6.78925 10.9783Z"
//                     stroke={"#EB5757"}
//                     fill={isBookmarked ? "#EB5757" : "transparent"}
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 />
//             </Svg>
//         </Pressable>
//     );
// };

import { Ionicons } from "@expo/vector-icons";

const BookmarkIcon = ({
    isBookmarked,
    onPress,
    fill = "#EB5757",
    size = 20,
}: BookmarkIconProps) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons
                name={isBookmarked ? "bookmark" : "bookmark-outline"}
                size={size}
                color={fill}
            />
        </Pressable>
    );
};

export default BookmarkIcon;
