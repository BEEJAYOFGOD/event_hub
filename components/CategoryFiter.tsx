import art from "@/assets/icons/art_icon.png";
import food from "@/assets/icons/food_icon.png";
import music from "@/assets/icons/music-icon.png";
import sports from "@/assets/icons/sport_icon.png";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { Text } from "./Themed";

interface FilterOption {
    icon: any;
    option: string;
    color: string;
}

interface CategoryFilterProps {
    selectedFilter?: string | null;
    onFilterSelect?: (filter: string) => void;
}

const filters = [
    {
        icon: sports,
        option: "Sport",
        color: "#F0635A",
    },
    {
        icon: art,
        option: "Art",
        color: "#F59762",
    },
    {
        icon: food,
        option: "Food",
        color: "#29D697",
    },
    {
        icon: music,
        option: "Music",
        color: "#46CDFB",
    },
];

export default function CategoryFilter({
    selectedFilter,
    onFilterSelect,
}: CategoryFilterProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
            contentContainerStyle={styles.categoriesContent}
        >
            {filters.map((filter, index) => (
                <Pressable
                    style={({ pressed }) => [
                        styles.categoryItem,
                        { backgroundColor: filter.color },
                        selectedFilter === filter.option &&
                            styles.categoryItemActive,
                        pressed && styles.categoryItemPressed,
                    ]}
                    key={index}
                    onPress={() => onFilterSelect?.(filter.option)}
                >
                    <Image style={styles.filterIcon} source={filter.icon} />
                    <Text style={styles.filterText}>{filter.option}</Text>
                </Pressable>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
        paddingVertical: 20,
        gap: 12,
        alignItems: "center",
    },
    categoryItemActive: {
        opacity: 0.8,
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.5)",
    },
    categoryItemPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.95 }],
    },
    categoriesContent: {
        paddingHorizontal: 24,
        gap: 12,
    },
    filterIcon: {
        height: 20,
        width: 20,
    },
    filterText: {
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 22,
        height: 22, // Match lineHeight, not minHeight
    },
});
