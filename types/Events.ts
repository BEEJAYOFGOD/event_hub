export interface Event {
    id: string;
    image: {
        uri: string;
    };
    title: string;
    venue: string;
    location: string;
    date: string; // Or use Date type
    time: string;
    endTime?: string; // Optional end time
    attendees: number;

    // Optional additional fields
    category?: "music" | "tech" | "food" | "art" | "sports";
    price?: number;
    description?: string;
    organizer?: string;
}
