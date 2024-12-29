import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    header: {
        width: "100%",
        alignItems: "center"
    },
    
    logo: {
        width: 170,
        height: 50
    },

    quacs: {
        borderRadius: 170 / 2,
        width: 170,
        height: 170,
        alignItems: "center"
    },

    titulo: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    }
}