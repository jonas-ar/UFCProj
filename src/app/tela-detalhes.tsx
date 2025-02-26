import { View, StyleSheet, Text, Alert } from 'react-native';
import { Button } from '@/components/button';
import { useLocalSearchParams } from 'expo-router';
import { Activity } from '@/contexts/activityContext';
import { useContext } from 'react';
import { ActivityContext } from '@/contexts/activityContext';
import { router } from 'expo-router';

export default function TelaDetalhes() {
    const { activity } = useLocalSearchParams<{ activity: string }>();
    const { deleteActivity, activities } = useContext(ActivityContext);

    if (!activity) {
        return (
            <View style={styles.container}>
                <Text>Atividade não encontrada.</Text>
            </View>
        );
    }

    const { titulo, responsavel, data, descricao } = JSON.parse(activity) as Activity;
    const activityIndex = activities.findIndex((act) => act.titulo === titulo && act.responsavel === responsavel && act.data === data);

    function handleDelete() {
        if (activityIndex !== -1) {
            deleteActivity(activityIndex);
            router.back();
        }

        if (activities.length === 1) {
            Alert.alert("Aviso", "Todas as atividades foram deletadas!\nCadastre se necessário", 
                [{text: 'OK', onPress: () => router.back()}])
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>Responsável: {responsavel}</Text>
            <Text style={styles.subtitulo}>Data: {data}</Text>
            <Text style={styles.descricao}>Descrição: {'\n'}{descricao}</Text>
            <View style={{flex: 1, alignContent: 'center', alignItems: 'flex-end', flexDirection: 'row', gap: 16}}>
                <Button texto='Deletar' onPress={handleDelete} style={{backgroundColor: "red"}}/>
                <Button texto='Editar' style={{backgroundColor: "#f49d1b"}}/>
            </View>
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
