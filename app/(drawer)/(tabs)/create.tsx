import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface FormData {
    title: string;
    venue: string;
    location: string;
    date: string;
    time: string;
    endTime: string;
    category: "music" | "tech" | "food" | "art" | "sports" | "";
    price: string;
    description: string;
    organizer: string;
}

const CreateEventScreen = () => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        venue: "",
        location: "",
        date: "",
        time: "",
        endTime: "",
        category: "",
        price: "",
        description: "",
        organizer: "",
    });

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const categories = [
        { id: "music", label: "Music", color: "#FF6B6B", icon: "🎵" },
        { id: "tech", label: "Tech", color: "#4ECDC4", icon: "💻" },
        { id: "food", label: "Food", color: "#95E1D3", icon: "🍔" },
        { id: "art", label: "Art", color: "#F38181", icon: "🎨" },
        { id: "sports", label: "Sports", color: "#5669FF", icon: "⚽" },
    ];

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSelectCategory = (categoryId: string) => {
        handleChange("category", categoryId as FormData["category"]);
    };

    const handleImagePick = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert(
                "Permission required",
                "Permission to access the media library is required."
            );
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images", "videos"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const handleSubmit = () => {
        // Validate required fields
        if (
            !formData.title ||
            !formData.venue ||
            !formData.location ||
            !formData.date ||
            !formData.time
        ) {
            alert("Please fill in all required fields");
            return;
        }

        // Create event object
        const newEvent = {
            id: Date.now().toString(),
            image: { uri: selectedImage || "" },
            title: formData.title,
            venue: formData.venue,
            location: formData.location,
            date: formData.date,
            time: formData.time,
            endTime: formData.endTime || undefined,
            attendees: 0,
            category: formData.category || undefined,
            price: formData.price ? parseFloat(formData.price) : undefined,
            description: formData.description || undefined,
            organizer: formData.organizer || undefined,
        };

        console.log("New Event:", newEvent);
        // Navigate back or save to backend
        alert("Event Created! 🎉");
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Image Upload */}
                <TouchableOpacity
                    style={styles.imageUpload}
                    onPress={handleImagePick}
                >
                    {selectedImage ? (
                        <Image
                            source={{ uri: selectedImage }}
                            style={styles.uploadedImage}
                        />
                    ) : (
                        <View style={styles.imagePlaceholder}>
                            <Text style={styles.uploadIcon}>📷</Text>
                            <Text style={styles.uploadText}>
                                Add Event Image
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>

                {/* Event Title */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Event Title *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter event name"
                        placeholderTextColor="#B0B0B0"
                        value={formData.title}
                        onChangeText={(text) => handleChange("title", text)}
                    />
                </View>

                {/* Category Selection */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Category</Text>
                    <View style={styles.categoryGrid}>
                        {categories.map((cat) => (
                            <TouchableOpacity
                                key={cat.id}
                                style={[
                                    styles.categoryChip,
                                    {
                                        backgroundColor:
                                            formData.category === cat.id
                                                ? cat.color
                                                : "#F5F5F5",
                                    },
                                ]}
                                onPress={() => handleSelectCategory(cat.id)}
                            >
                                <Text style={styles.categoryIcon}>
                                    {cat.icon}
                                </Text>
                                <Text
                                    style={[
                                        styles.categoryLabel,
                                        {
                                            color:
                                                formData.category === cat.id
                                                    ? "#FFFFFF"
                                                    : "#120D26",
                                        },
                                    ]}
                                >
                                    {cat.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Venue */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Venue *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g., O2 Arena"
                        placeholderTextColor="#B0B0B0"
                        value={formData.venue}
                        onChangeText={(text) => handleChange("venue", text)}
                    />
                </View>

                {/* Location */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Location *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g., 36 Guild Street London, UK"
                        placeholderTextColor="#B0B0B0"
                        value={formData.location}
                        onChangeText={(text) => handleChange("location", text)}
                    />
                </View>

                {/* Date & Time Row */}
                <View style={styles.rowGroup}>
                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <Text style={styles.label}>Date *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="10 JUNE 2025"
                            placeholderTextColor="#B0B0B0"
                            value={formData.date}
                            onChangeText={(text) => handleChange("date", text)}
                        />
                    </View>

                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <Text style={styles.label}>Start Time *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="7:30 PM"
                            placeholderTextColor="#B0B0B0"
                            value={formData.time}
                            onChangeText={(text) => handleChange("time", text)}
                        />
                    </View>
                </View>

                {/* End Time & Price Row */}
                <View style={styles.rowGroup}>
                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <Text style={styles.label}>End Time (Optional)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="10:00 PM"
                            placeholderTextColor="#B0B0B0"
                            value={formData.endTime}
                            onChangeText={(text) =>
                                handleChange("endTime", text)
                            }
                        />
                    </View>

                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <Text style={styles.label}>Price (Optional)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="$0.00"
                            placeholderTextColor="#B0B0B0"
                            keyboardType="numeric"
                            value={formData.price}
                            onChangeText={(text) => handleChange("price", text)}
                        />
                    </View>
                </View>

                {/* Organizer */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Organizer (Optional)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter organizer name"
                        placeholderTextColor="#B0B0B0"
                        value={formData.organizer}
                        onChangeText={(text) => handleChange("organizer", text)}
                    />
                </View>

                {/* Description */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Description (Optional)</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Tell people more about this event..."
                        placeholderTextColor="#B0B0B0"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                        value={formData.description}
                        onChangeText={(text) =>
                            handleChange("description", text)
                        }
                    />
                </View>

                {/* Create Button */}
                <TouchableOpacity
                    style={styles.createButton}
                    onPress={handleSubmit}
                >
                    <Text style={styles.createButtonText}>Create Event</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0",
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
    },
    backIcon: {
        fontSize: 20,
        color: "#120D26",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: "#120D26",
    },
    placeholder: {
        width: 40,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 24,
        paddingTop: 0,
        paddingBottom: 40,
    },
    imageUpload: {
        width: "100%",
        height: 180,
        borderRadius: 16,
        backgroundColor: "#F5F5F5",
        marginBottom: 24,
        overflow: "hidden",
    },
    imagePlaceholder: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    uploadedImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    uploadIcon: {
        fontSize: 40,
        marginBottom: 8,
    },
    uploadText: {
        fontSize: 16,
        color: "#747688",
        fontWeight: "500",
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#120D26",
        marginBottom: 8,
    },
    input: {
        backgroundColor: "#F5F5F5",
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 15,
        color: "#120D26",
        borderWidth: 1,
        borderColor: "transparent",
    },
    textArea: {
        minHeight: 100,
        paddingTop: 14,
    },
    categoryGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    categoryChip: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        gap: 6,
    },
    categoryIcon: {
        fontSize: 18,
    },
    categoryLabel: {
        fontSize: 14,
        fontWeight: "500",
    },
    rowGroup: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 20,
    },
    halfWidth: {
        flex: 1,
        marginBottom: 0,
    },
    createButton: {
        backgroundColor: "#5669FF",
        borderRadius: 16,
        paddingVertical: 18,
        alignItems: "center",
        marginTop: 12,
        shadowColor: "#5669FF",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    createButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
});

export default CreateEventScreen;
