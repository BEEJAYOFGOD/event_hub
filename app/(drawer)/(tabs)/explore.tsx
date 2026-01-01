import filter from "@/assets/icons/filter-circle.png"; // Add filter icon
import Hamburger from "@/assets/icons/hamburger.png";
import notifIcon from "@/assets/icons/notification.png";
import search from "@/assets/icons/search.png";
import see_all from "@/assets/icons/see_all.png";
import CategoryFilter from "@/components/CategoryFiter";
import CTA from "@/components/CTA";
import EventCard from "@/components/EventCard";
import { Text, View } from "@/components/Themed";
import { useAppRouter } from "@/config/route";
import { Event } from "@/types/Events";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Modal,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Sample locations - replace with your actual data
const LOCATIONS = [
    "New York, USA",
    "Los Angeles, USA",
    "Chicago, USA",
    "Houston, USA",
    "Phoenix, USA",
    "Philadelphia, USA",
    "San Antonio, USA",
    "San Diego, USA",
];

const screenWidth = Dimensions.get("window").width;

export default function TabOneScreen() {
    const [selectedLocation, setSelectedLocation] = useState("New York, USA");
    const [isLocationDropdownVisible, setIsLocationDropdownVisible] =
        useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const handleLocationSelect = (location: string) => {
        setSelectedLocation(location);
        setIsLocationDropdownVisible(false);
    };

    const router = useAppRouter();
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
    const shuffled = (arr: Event[]): Event[] =>
        arr
            .map((v): [Event, number] => [v, Math.random()]) // <-- tuple typing
            .sort((a, b) => a[1] - b[1]) // now a[1] and b[1] are numbers
            .map((v) => v[0]); // return the Event objects

    const RANDOM_EVENTS = shuffled(DUMMY_EVENTS);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5669FF" />
            <View style={styles.homeTopView}>
                {/* Header with hamburger and notification */}

                <View style={styles.homeTopViewHeader}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                        activeOpacity={0.7}
                    >
                        <Image style={styles.icon} source={Hamburger} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.locationContainer}
                        activeOpacity={0.7}
                        onPress={() => setIsLocationDropdownVisible(true)}
                    >
                        <Text style={styles.locationLabel}>
                            Current Location ▼
                        </Text>
                        <View style={styles.locationRow}>
                            <Text style={styles.locationText}>
                                {selectedLocation}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7}>
                        <Image style={styles.icon} source={notifIcon} />
                    </TouchableOpacity>
                </View>

                {/* Location Selector */}
                {/* Search and Filter Bar */}
                <View style={styles.searchFilterContainer}>
                    <View style={styles.searchBar}>
                        <Image style={styles.searchIcon} source={search} />
                        <View style={styles.divider} />
                        <TextInput
                            cursorColor="#FFFFFF"
                            placeholder="Search..."
                            placeholderTextColor="rgba(255, 255, 255, 0.6)"
                            style={styles.searchInput}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.filterButton}
                        activeOpacity={0.7}
                    >
                        <Image style={styles.icon} source={filter} />
                        <Text style={styles.filterText}>Filters</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CategoryFilter
                selectedFilter={selectedFilter}
                onFilterSelect={setSelectedFilter}
            />

            <ScrollView>
                <View
                    style={{
                        backgroundColor: "transparent",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 24,
                        marginVertical: 12,
                        alignItems: "center",
                    }}
                >
                    <Text
                        lightColor="black"
                        darkColor="black"
                        weight="medium"
                        style={{ fontSize: 20 }}
                    >
                        Upcoming Events
                    </Text>
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <Text
                            weight="medium"
                            style={{ fontSize: 16, color: "grey" }}
                        >
                            See All
                        </Text>
                        <Image
                            style={{ width: 8, resizeMode: "contain" }}
                            source={see_all}
                        />
                    </TouchableOpacity>
                </View>

                {/* Homepage event card scrollView */}
                <ScrollView
                    horizontal
                    style={{ flexGrow: 0, flexShrink: 1 }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
                >
                    {DUMMY_EVENTS.map((event) => (
                        <EventCard
                            key={event.id}
                           {...event}
                        />
                    ))}
                </ScrollView>

                <CTA />

                <View
                    style={{
                        backgroundColor: "transparent",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 24,
                        marginVertical: 12,
                        alignItems: "center",
                    }}
                >
                    <Text weight="medium" style={{ fontSize: 20 }}>
                        Nearby You
                    </Text>
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 4,
                        }}
                        onPress={() => {
                            router.toEvents();
                            console.log("amen");
                        }}
                    >
                        <Text
                            weight="medium"
                            style={{ fontSize: 16, color: "grey" }}
                        >
                            See All
                        </Text>
                        <Image
                            style={{ width: 8, resizeMode: "contain" }}
                            source={see_all}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    style={{ flexGrow: 0, flexShrink: 1 }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
                >
                    {RANDOM_EVENTS.map((event) => (
                        <EventCard
                            key={event.id}
                            image={event.image}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            attendees={event.attendees}
                        />
                    ))}
                </ScrollView>

                {/* Location Dropdown Modal */}
            </ScrollView>

            <Modal
                visible={isLocationDropdownVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsLocationDropdownVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setIsLocationDropdownVisible(false)}
                >
                    <View style={styles.dropdownContainer}>
                        <View style={styles.dropdownHeader}>
                            <Text style={styles.dropdownTitle}>
                                Select Location
                            </Text>

                            <TouchableOpacity
                                onPress={() =>
                                    setIsLocationDropdownVisible(false)
                                }
                            >
                                <Text style={styles.closeButton}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={LOCATIONS}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.locationItem,
                                        item === selectedLocation &&
                                            styles.selectedLocationItem,
                                    ]}
                                    onPress={() => handleLocationSelect(item)}
                                >
                                    <Text
                                        style={[
                                            styles.locationItemText,
                                            item === selectedLocation &&
                                                styles.selectedLocationText,
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                    {item === selectedLocation && (
                                        <Text style={styles.checkmark}>✓</Text>
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7ff",
        // paddingTop: 30,
    },
    homeTopView: {
        backgroundColor: "#5669FF",
        paddingTop: 12,
        paddingHorizontal: 24,
        borderBottomStartRadius: 33,
        borderBottomEndRadius: 33,
        paddingBottom: 30,
    },
    homeTopViewHeader: {
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },

    // Location Selector Styles
    locationContainer: {
        backgroundColor: "transparent",
        alignItems: "center",
        marginBottom: 20,
    },
    locationLabel: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.7)",
        fontFamily: "AirbnbCereal-Book",
        marginBottom: 4,
    },
    locationRow: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    locationText: {
        fontSize: 13,
        color: "#FFFFFF",
        fontFamily: "AirbnbCereal-Medium",
    },
    dropdownIcon: {
        fontSize: 10,
        color: "#FFFFFF",
    },

    // Search Bar Styles
    searchFilterContainer: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    filters: {
        flexDirection: "row",
        // borderWidth: 12,
    },
    filtersContainer: {
        width: screenWidth * 1,
        // borderWidth: 12,
    },
    filterIcon: {
        height: 20,
        width: 20,
        // resizeMode: "cover",
        // borderWidth: 12,
    },
    divider: {
        width: 1,
        height: 20, // Adjust height as needed
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    searchBar: {
        flex: 1,
        backgroundColor: "transparent",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        gap: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        tintColor: "rgba(255, 255, 255, 0.8)",
    },
    searchInput: {
        flex: 1,
        color: "#FFFFFF",
        fontFamily: "AirbnbCereal-Book",
        fontSize: 14,
    },
    filterButton: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    filterText: {
        color: "#FFFFFF",
        fontFamily: "AirbnbCereal-Book",
        fontSize: 12,
    },

    // ScrollView
    categoriesScroll: {
        marginBottom: 20,
        marginTop: -20,
        flexGrow: 0,
        flexShrink: 1,
    },
    categoryItem: {
        flexDirection: "row",
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 12,
        gap: 12,
        alignItems: "center",
    },
    categoryItemPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.8 }],
    },
    categoriesContent: {
        paddingHorizontal: 24,
        gap: 12,
    },

    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    dropdownContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        width: "85%",
        maxHeight: "70%",
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    dropdownHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0",
    },
    dropdownTitle: {
        fontSize: 18,
        fontFamily: "AirbnbCereal-Medium",
        color: "#120D26",
    },
    closeButton: {
        fontSize: 24,
        color: "#747688",
    },
    locationItem: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5",
    },
    selectedLocationItem: {
        backgroundColor: "#F5F7FF",
    },
    locationItemText: {
        fontSize: 15,
        fontFamily: "AirbnbCereal-Book",
        color: "#120D26",
    },
    selectedLocationText: {
        fontFamily: "AirbnbCereal-Medium",
        color: "#5669FF",
    },
    checkmark: {
        fontSize: 18,
        color: "#5669FF",
    },
});
