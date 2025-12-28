export interface Event {
    id: string;
    image: {
        uri: string;
    };
    title: string;
    location: string;
    date: string;
    attendees: number;
}
