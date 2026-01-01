import organizer_image from "@/assets/images/organizer.png";
import BookmarkIcon from "@/components/BookmarkIcon";
import { avatars } from "@/components/EventCard";
import StackAvatar from "@/components/StackAvatar";
import { Text, View } from "@/components/Themed";
import BackBtn from "@/components/ui/backBtn";
import Button from "@/components/ui/button";
import { shadow } from "@/helper/shadow";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet } from "react-native";

const EventPreview = () => {
    const { image, title, attendees, date, location } = useLocalSearchParams();

    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <View
            style={{
                flex: 1,
                position: "relative",
            }}
        >
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <View style={{ backgroundColor: "transparent" }}>
                <Image
                    source={{ uri: image as string }}
                    style={{ height: 320, width: "100%" }}
                />
            </View>

            <View style={styles.PreviewHeader}>
                <View
                    style={{
                        backgroundColor: "transparent",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 12,
                    }}
                >
                    <BackBtn light />
                    <Text style={styles.PreviewText}>Event Details</Text>
                </View>

                <BlurView
                    intensity={20}
                    tint="light"
                    style={styles.iconContainer}
                    blurReductionFactor={20}
                >
                    <BookmarkIcon
                        onPress={handleBookmark}
                        isBookmarked={isBookmarked}
                        fill="white"
                        size={24}
                    />
                </BlurView>
            </View>

            <View style={styles.attendeeView}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 6,
                    }}
                >
                    <StackAvatar size={40} avatars={avatars} />
                    <Text
                        lightColor="#3F38DD"
                        weight="medium"
                        style={{ fontSize: 18 }}
                    >
                        {attendees}+ Going
                    </Text>
                </View>

                <Button
                    style={{
                        borderRadius: 8,
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                    }}
                    variant="primary"
                    width={"fit"}
                >
                    <Text lightColor="white">Invite</Text>
                </Button>
            </View>

            <ScrollView
                style={styles.middleView}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <Text style={styles.eventTitle}>{title}</Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                        marginTop: 20,
                    }}
                >
                    <View style={styles.eventIconContiner}>
                        <Ionicons name="calendar" size={40} color={"#5669FF"} />
                    </View>

                    <View>
                        <Text weight="medium" style={{ fontSize: 20 }}>
                            {date}
                        </Text>
                        <Text lightColor="gray">
                            Tuesday, 4: 00 PM - 9:00 PM
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                        marginTop: 20,
                    }}
                >
                    <View style={styles.eventIconContiner}>
                        <Ionicons name="location" size={40} color={"#5669FF"} />
                    </View>

                    <View>
                        <Text weight="medium" style={{ fontSize: 20 }}>
                            Gala Convention Center
                        </Text>
                        <Text lightColor="gray">{location}</Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                        marginTop: 20,
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 8,
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 12,
                            }}
                            source={organizer_image}
                        />

                        <View>
                            <Text weight="medium" style={{ fontSize: 20 }}>
                                Ashfak Sayem
                            </Text>
                            <Text lightColor="gray">Organizer</Text>
                        </View>
                    </View>

                    <Button
                        width={"fit"}
                        style={{
                            backgroundColor: "#5669FF1a",
                            paddingHorizontal: 16,
                            paddingVertical: 12,
                            borderRadius: 8,
                            ...shadow(0),
                        }}
                    >
                        <Text lightColor="#5669FF" weight="medium">
                            Follow
                        </Text>
                    </Button>
                </View>

                <View style={{ marginTop: 24 }}>
                    <Text
                        weight="medium"
                        style={{ fontSize: 25, marginBottom: 12 }}
                    >
                        About Event
                    </Text>

                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet debitis aspernatur consequatur deleniti dolores
                        repellendus, sequi velit nam ipsa veniam pariatur atque
                        totam voluptas nulla at inventore perferendis sit
                        voluptatum? Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Quos vitae adipisci atque illo
                        officiis neque incidunt laudantium quasi ipsam, fugiat
                        animi est consequatur accusantium dolore quis quibusdam
                        et cupiditate id. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eveniet debitis aspernatur consequatur
                        deleniti dolores repellendus, sequi velit nam ipsa
                        veniam pariatur atque totam voluptas nulla at inventore
                        perferendis sit voluptatum? Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Quos vitae adipisci atque
                        illo officiis neque incidunt laudantium quasi ipsam,
                        fugiat animi est consequatur accusantium dolore quis
                        quibusdam et cupiditate id.
                    </Text>
                </View>
            </ScrollView>

            <LinearGradient
                colors={["transparent", "rgba(255, 255, 255, 0.5)", "#ffffff"]}
                locations={[0, 0.3, 1]}
                style={styles.gradient}
            >
                <Button
                    width={"90%"}
                    variant="primary"
                    onPress={() => console.log("Pressed")}
                    arrow
                    content="Buy Tickt $120"
                />
            </LinearGradient>
        </View>
    );
};

export default EventPreview;

const styles = StyleSheet.create({
    PreviewHeader: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        top: 48,
        backgroundColor: "transparent",
        paddingHorizontal: 18,
        width: "100%",
        zIndex: 2,
    },

    PreviewText: {
        color: "white",
        fontSize: 24,
    },
    iconContainer: {
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        overflow: "hidden",
    },
    avatarGroup: {
        flexDirection: "row",
    },
    attendeeView: {
        marginTop: "-5%",
        zIndex: 20,
        width: "80%",
        marginHorizontal: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 500,
        padding: 12,
        flexDirection: "row",
        ...shadow(20),
    },
    eventTitle: {
        fontSize: 40,
    },
    middleView: {
        marginTop: 20,
        paddingHorizontal: 24,
        flex: 1,
    },
    eventIconContiner: {
        backgroundColor: "#5669FF1a",
        padding: 12,
        borderRadius: 12,
    },
    gradient: {
        position: "absolute", // Fixed at bottom
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "flex-end",
        height: 120, // Fixed height instead of flex: 1
    },
});
