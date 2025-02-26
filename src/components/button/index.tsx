import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import {styles} from "./styles"

type Props = TouchableOpacityProps & {
    texto: string,
    style?: Object
}

export function Button({texto, style, ...rest}: Props) {
    return (
        <TouchableOpacity style={[styles.button, style]} activeOpacity={0.8} {...rest}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}