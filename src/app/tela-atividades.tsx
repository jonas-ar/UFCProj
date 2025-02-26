import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ActivityContext } from '@/contexts/activityContext';
import { FlashList } from "@shopify/flash-list";

export default function TelaAtividades() {
    const { activities } = useContext(ActivityContext);

    return (
        <View style={styles.container}>
            <FlashList
                data={activities}
                estimatedItemSize={100}
                renderItem={({ item }) => (
                    <View style={styles.activityItem}>
                        <Text style={styles.title}>{item.titulo}</Text>
                        <Text>Responsável: {item.responsavel}</Text>
                        <Text>Data: {item.data}</Text>
                        <Text>Descrição: {"\n"}{item.descricao}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    activityItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});