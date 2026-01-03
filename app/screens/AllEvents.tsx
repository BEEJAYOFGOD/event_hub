import more_icon from "@/assets/icons/more-vertical.png";
import searchIcon from "@/assets/icons/search.png";
import EventArticleCard from "@/components/EventArticleCard";
import { Text, View } from "@/components/Themed";
import BackBtn from "@/components/ui/backBtn";
import { Event } from "@/types/Events";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AllEvents = () => {
    const DUMMY_EVENTS: Event[] = [
        {
            id: "1",
            image: {
                uri: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500",
            },
            title: "International Band Music Concert",
            venue: "O2 Arena",
            location: "36 Guild Street London, UK",
            date: "10 JUNE 2025",
            time: "7:30 PM",
            attendees: 20,
        },
        {
            id: "2",
            image: {
                uri: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500",
            },
            title: "Jo Malone London's Mother's Day",
            venue: "Radius Gallery",
            location: "Santa Cruz, CA",
            date: "20 JUNE 2025",
            time: "2:00 PM",
            attendees: 35,
        },
        {
            id: "3",
            image: {
                uri: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500",
            },
            title: "Summer Music Festival 2024",
            venue: "Central Park Main Stage",
            location: "New York, USA",
            date: "15 JULY 2025",
            time: "12:00 PM",
            attendees: 150,
        },
        {
            id: "4",
            image: {
                uri: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500",
            },
            title: "Tech Conference 2024",
            venue: "Moscone Convention Center",
            location: "San Francisco, CA",
            date: "25 AUG 2025",
            time: "9:00 AM",
            attendees: 500,
        },
        {
            id: "5",
            image: {
                uri: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500",
            },
            title: "Food & Wine Tasting Experience",
            venue: "The Gourmet Kitchen",
            location: "Downtown Chicago, IL",
            date: "05 SEPT 2025",
            time: "6:00 PM",
            attendees: 45,
        },
        {
            id: "6",
            image: {
                uri: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500",
            },
            title: "Art Gallery Exhibition",
            venue: "LACMA - Los Angeles County Museum",
            location: "Los Angeles, CA",
            date: "12 SEPT 2025",
            time: "10:00 AM",
            attendees: 80,
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar />
            {/* Header - Fixed at top */}
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <BackBtn />
                    <Text style={{ fontSize: 28 }} weight="medium">
                        Events
                    </Text>
                </View>

                <View style={styles.rightTop}>
                    <Image
                        style={styles.icon}
                        tintColor={"black"}
                        source={searchIcon}
                    />
                    <Image
                        source={more_icon}
                        tintColor={"black"}
                        style={styles.icon}
                    />
                </View>
            </View>

            {/* Scrollable Content */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {DUMMY_EVENTS.map((event: Event) => (
                    <EventArticleCard key={event.id} {...event} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f7f7f7ff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: "transparent",
    },
    leftHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        backgroundColor: "transparent",
    },
    rightTop: {
        flexDirection: "row",
        gap: 16,
        backgroundColor: "transparent",
    },
    icon: {
        width: 28,
        height: 28,
        resizeMode: "contain",
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 20,
        gap: 12,
    },
});

export default AllEvents;
