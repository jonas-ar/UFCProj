import { View, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Activity } from '@/contexts/activityContext';

export default function TelaDetalhes() {
    const { activity } = useLocalSearchParams<{ activity: string }>();

    if (!activity) {
        return (
            <View style={styles.container}>
                <Text>Atividade não encontrada.</Text>
            </View>
        );
    }
    
    const { titulo, responsavel, data, descricao } = JSON.parse(activity) as Activity;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>Responsável: {responsavel}</Text>
            <Text style={styles.subtitulo}>Data: {data}</Text>
            <Text style={styles.descricao}>Descrição: {'\n'}{descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F4F5F6',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitulo: {
        fontSize: 22,
        marginBottom: 8,
    },
    descricao: {
        fontSize: 20,
        marginTop: 16,
    },
});