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
        width: 170,
        height: 170,
        borderRadius: 170 / 2, // A metade da largura/altura para um círculo perfeito
        alignItems: 'center', // Centraliza o conteúdo verticalmente (se necessário)
      },
    titulo: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    }
}