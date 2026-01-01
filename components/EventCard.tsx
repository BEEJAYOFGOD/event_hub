import map_pin from "@/assets/icons/map-pin.png";
import oval_1 from "@/assets/images/oval_1.png";
import oval_2 from "@/assets/images/oval_2.png";
import oval_3 from "@/assets/images/oval_3.png";
import { useAppRouter } from "@/config/route";
import { Event } from "@/types/Events";
import { useState } from "react";
import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
} from "react-native";
import BookmarkIcon from "./BookmarkIcon";
import StackAvatar from "./StackAvatar";
import { Text, View } from "./Themed";

export interface EventCardProps
    extends Pick<
        Event,
        "image" | "title" | "location" | "date" | "attendees"
    > {}

export const avatars: ImageSourcePropType[] = [oval_1, oval_2, oval_3];

const EventCard = ({
    image,
    title,
    location,
    date,
    attendees,
}: // onPress,
EventCardProps) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const router = useAppRouter();

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    const onPress = () => {
        // Type guard to check if image has a uri property
        const imageUri = (image as { uri: string })?.uri;

        console.log(date);

        router.toEventPreview({
            image: imageUri,
            title,
            location,
            attendees,
            date,
        });
    };

    return (
        <Pressable onPress={onPress} style={styles.card}>
            {/* Event Image */}
            <View style={styles.imageContainer}>
                <Image style={styles.eventImage} source={image} />

                {/* Date Badge */}
                <View style={styles.dateBadge}>
                    <Text style={styles.dateDay}>{date.split(" ")[0]}</Text>
                    <Text style={styles.dateMonth}>{date.split(" ")[1]}</Text>
                </View>

                {/* Bookmark Icon */}
                <View style={styles.bookmarkIconContainer}>
                    <BookmarkIcon
                        isBookmarked={isBookmarked}
                        onPress={handleBookmark}
                        size={18}
                    />
                </View>
            </View>

            {/* Event Details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>

                {/* Attendees */}
                <View style={styles.attendeesRow}>
                    <StackAvatar avatars={avatars} />
                    <Text style={styles.attendeesText}>+{attendees} Going</Text>
                </View>

                {/* Location */}
                <View style={styles.locationRow}>
                    <Image style={styles.mapPin} source={map_pin} />
                    <Text style={styles.locationText} numberOfLines={1}>
                        {location}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default EventCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 16,
        width: 250,
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: 170,
        padding: 8,
    },

    eventImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 16,
    },
    dateBadge: {
        position: "absolute",
        top: 16,
        left: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 10,
        alignItems: "center",
        minWidth: 45,
    },
    dateDay: {
        fontSize: 18,
        fontFamily: "AirbnbCereal-Bold",
        color: "#F0635A",
    },
    dateMonth: {
        fontSize: 10,
        fontFamily: "AirbnbCereal-Book",
        color: "#F0635A",
        textTransform: "uppercase",
    },
    bookmarkIcon: {
        position: "absolute",
        top: 16,
        right: 16,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 7,
        padding: 6,
    },

    bookmarkIconContainer: {
        position: "absolute",
        top: 16,
        right: 16,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 7,
        padding: 8,
    },
    bookmarkText: {
        fontSize: 16,
    },
    detailsContainer: {
        padding: 12,
        backgroundColor: "transparent",
    },
    title: {
        fontSize: 18,
        fontFamily: "AirbnbCereal-Medium",
        color: "#120D26",
        marginBottom: 12,
        lineHeight: 24,
    },
    attendeesRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        backgroundColor: "transparent",
    },
    // avatarGroup: {
    //     width: 33,
    //     height: 12,
    //     marginRight: 6,
    //     resizeMode: "contain",
    // },

    avatarGroup: {
        flexDirection: "row",
    },

    avatarImage: {
        height: 30,
        width: 30,
    },
    attendeesText: {
        fontSize: 12,
        fontFamily: "AirbnbCereal-Book",
        color: "#5669FF",
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    mapPin: {
        width: 18,
        height: 18,
        marginRight: 6,
        resizeMode: "contain",
        // tintColor: "#747688",
    },
    locationText: {
        fontSize: 13,
        fontFamily: "AirbnbCereal-Book",
        color: "#747688",
        flex: 1,
    },
});
