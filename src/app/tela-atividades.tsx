import { View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ActivityContext } from '@/contexts/activityContext';
import { FlashList } from "@shopify/flash-list";
import { Card } from '@/components/card';
import { router } from 'expo-router';

export default function TelaAtividades() {
    const { activities } = useContext(ActivityContext);

    return (
        <View style={styles.container}>
            <FlashList
                data={activities}
                estimatedItemSize={100}
                renderItem={({ item }) => (
                    <Card titulo={item.titulo} subtitulo="Clique para detalhes..." 
                    onPress={() => router.push({pathname: '/tela-detalhes', params: {activity: JSON.stringify(item)}})}/>
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
});