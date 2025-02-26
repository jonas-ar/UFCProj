import { Stack } from "expo-router";
import { ActivityProvider } from '@/contexts/activityContext';

export default function Layout() {
    return (
        <ActivityProvider>
            <Stack screenOptions={{}}>
                <Stack.Screen name="index" options={{title: "Cadastro de atividades acadêmicas", headerTitleAlign: "center"}} />
                <Stack.Screen name="tela-atividades" options={{title: "Minhas atividades", headerTitleAlign: "center"}} />
                <Stack.Screen name="tela-detalhes" options={{title: "Detalhes da atividade", headerTitleAlign: "center"}} />
            </Stack>
        </ActivityProvider>
    )
}