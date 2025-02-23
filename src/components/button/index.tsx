import { TouchableOpacity, TouchableOpacityProps, Text, TextProps } from "react-native"
import {styles} from "./styles"

type Props = TouchableOpacityProps & {
    texto: String
}

export function Button({texto, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} {...rest}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}