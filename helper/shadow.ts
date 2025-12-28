export const shadow = (elevation: number) => ({
    // Android
    elevation,
    // iOS
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: elevation / 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: elevation / 2,
});
