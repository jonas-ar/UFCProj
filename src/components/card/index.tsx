import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { styles } from "./styles"


type Props = TouchableOpacityProps & {
    titulo: string,
    subtitulo: string,
    style?: Object
}

export function Card({titulo, subtitulo, style, ...rest}: Props) {
    return (
        <TouchableOpacity style={[styles.card, styles.cardLinha, style]} {...rest} >
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </TouchableOpacity>
    )
}