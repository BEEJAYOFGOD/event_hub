import map_pin from "@/assets/icons/map-pin.png";
import { shadow } from "@/helper/shadow";
import { Event } from "@/types/Events";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "./Themed";

interface EventCardProps
    extends Pick<Event, "image" | "title" | "date" | "time" | "location"> {}

const EventArticleCard = ({
    image,
    title,
    date,
    time,
    location,
}: EventCardProps) => {
    // Format the date to get the day name
    const formatDate = (dateString: string) => {
        // Parse the date string (e.g., "10 JUNE 2025")
        const months: { [key: string]: number } = {
            JAN: 0,
            FEB: 1,
            MAR: 2,
            APR: 3,
            MAY: 4,
            JUN: 5,
            JUNE: 5,
            JUL: 6,
            JULY: 7,
            AUG: 8,
            SEP: 9,
            SEPT: 9,
            OCT: 10,
            NOV: 11,
            DEC: 12,
        };

        const parts = dateString.split(" ");
        const day = parseInt(parts[0]);
        const month = months[parts[1].toUpperCase()];
        const year = parseInt(parts[2]);

        const dateObj = new Date(year, month, day);

        // Get day name (e.g., "SAT")
        const dayName = dateObj
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase();

        // Get ordinal suffix (1st, 2nd, 3rd, etc.)
        const getOrdinal = (n: number) => {
            const s = ["th", "st", "nd", "rd"];
            const v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        };

        return {
            dayName,
            dayWithOrdinal: getOrdinal(day),
            day,
            monthName: parts[1],
        };
    };

    const { dayName, monthName, day } = formatDate(date);

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} resizeMode="cover" />

            <View style={styles.textContainer}>
                <View style={styles.topView}>
                    <Text style={styles.dateText}>
                        {dayName}, {monthName} {day} • {time}
                    </Text>
                    <Text weight="medium" style={styles.titleText}>
                        {title}
                    </Text>
                </View>

                <View style={styles.bottomView}>
                    <Image source={map_pin} style={styles.locationIcon} />
                    <Text style={styles.locationText}>{location}</Text>
                </View>
            </View>
        </View>
    );
};

export default EventArticleCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",

        borderRadius: 16,
        padding: 12,
        alignItems: "center",
        ...shadow(2),
    },
    image: {
        width: 80,
        height: 92,
        borderRadius: 12,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "column",
        gap: 2,
        justifyContent: "space-between",
        minHeight: 80,
        alignContent: "space-between",
    },
    dateText: {
        fontSize: 13,
        fontFamily: "AirbnbCereal-Book",
        color: "#5669FF",
    },
    titleText: {
        fontSize: 20,
        lineHeight: 22,
    },
    locationIcon: {
        width: 20,
        height: 20,
        objectFit: "contain",
    },
    topView: {
        flexDirection: "column",
        gap: 4,
    },
    bottomView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    locationText: {
        fontSize: 14,
        color: "#747688",
    },
});
