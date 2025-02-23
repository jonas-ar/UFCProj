import {View, Text, StyleSheet, Alert} from 'react-native'
import { useState } from 'react'
import {Button} from "@/components/button"
import {Input} from "@/components/input"
import {router} from "expo-router"

export default function Index() {

    const [nome, setNome] = useState<String>()

    function goNext() {
        router.navigate("/dashboard")
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.texto}>Olá, {nome}</Text>
            <Input onChangeText={setNome} placeholder="Seu nome..." placeholderTextColor="#5e5e5e"/>
            <Button texto = "Cadastrar" onPress={goNext} />
            <Button texto = "Visualizar" onPress={() => Alert.alert(`Bem-vindo ${nome}`)} />
            <Button texto = "Acompanhar" onPress={goNext} />
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#e6e6e6",
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },

    texto: {
        fontSize: 24,
        fontWeight: "normal",
        fontFamily: "Roboto"
    },
})