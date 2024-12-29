import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    restaurante: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10
    },
    logotipo: {
        borderRadius: 5,
        width: 80,
        height: 80
    },
    textos: {
        flex: 1,
        padding: 8
    },
    nome: {
        color: COLORS.dark_gray,
        marginBottom: 3,
        fontSize: FONT_SIZE.sm
    },
    endereco: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm
    },
    favorito: {
        width: 30,
        marginRight: 10,
        marginTop: 5,
        height: 30
    }
}