import { Event } from "@/types/Events";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import mapPin from "@/assets/icons/map-pin.png";

interface EventCardProps
    extends Pick<Event, "image" | "title" | "date" | "time"> {}

const EventArticleCard = ({ image, title, date, time }: EventCardProps) => {
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
            monthName: parts[1],
        };
    };

    const { dayName, dayWithOrdinal, monthName } = formatDate(date);

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} resizeMode="cover" />

            <View style={styles.textContainer}>
                <Text style={styles.dateText}>
                    {dayWithOrdinal} {monthName}- {dayName}- {time}
                </Text>
                <Text style={styles.titleText}>{title}</Text>
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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 12,
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
    },
    dateText: {
        fontSize: 13,
        fontFamily: "AirbnbCereal-Book",
        color: "#5669FF",
        marginBottom: 8,
    },
    titleText: {
        fontSize: 15,
        fontFamily: "AirbnbCereal-Medium",
        color: "#120D26",
        lineHeight: 22,
    },
});
