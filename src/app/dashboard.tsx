import { Button } from "@/components/button"
import { router } from "expo-router"
import { View, Text, StyleSheet } from "react-native"

export default function Dashboard() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.texto}>Tela 02</Text>
            <Button texto = "Voltar" onPress={() => router.back()} />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6e6",
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },

    texto: {
        fontSize: 18,
        fontFamily: "Roboto"
    }
})