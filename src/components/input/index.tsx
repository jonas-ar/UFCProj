import MaskInput, {MaskInputProps} from 'react-native-mask-input'
import { styles } from "./styles"

type Props = MaskInputProps & {
    style?: Object
}

export function Input({style, ...rest}: Props) {
    return (
        <MaskInput style = {[styles.input, style]} {...rest} />
    )
}