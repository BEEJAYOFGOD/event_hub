import { useColorScheme } from "@/components/useColorScheme";

export const useTheme = () => {
    const theme = useColorScheme();

    console.log(theme);
};
