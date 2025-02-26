import { View, StyleSheet, Alert } from 'react-native';
import { useState, useContext } from 'react';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { router } from 'expo-router';
import { Masks } from 'react-native-mask-input';
import { ActivityContext } from '@/contexts/activityContext';

export default function Index() {
    const [nomeAtv, setNomeAtv] = useState<string>('');
    const [nomeResp, setNomeResp] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const { addActivity } = useContext(ActivityContext);

    function goTelaAtividade() {
        if (nomeAtv && nomeResp && data && desc) {
            const newActivity = {
                titulo: nomeAtv,
                responsavel: nomeResp,
                data: data,
                descricao: desc,
            };
            addActivity(newActivity);
            limpaCampos();
            router.navigate('/tela-atividades');
        } else {
            Alert.alert("Preencha os campos obrigatórios!");
        }
    }

    function limpaCampos() {
        setNomeAtv('');
        setNomeResp('');
        setData('');
        setDesc('');
    }

    return (
        <View style={styles.container}>
            <Input placeholder='Nome da atividade...' value={nomeAtv} onChangeText={setNomeAtv} />
            <Input placeholder='Nome do responsável...' value={nomeResp} onChangeText={setNomeResp} />
            <Input placeholder='Data...' mask={Masks.DATE_DDMMYYYY} value={data} onChangeText={setData} />
            <Input
                placeholder='Descrição...'
                multiline
                value={desc}
                onChangeText={setDesc}
                style={{ height: 100, textAlignVertical: 'top' }}
            />
            <Button
                texto='Cadastrar'
                onPress={goTelaAtividade}
                activeOpacity={0.7}
                style={{ backgroundColor: '#339966' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F6',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },

    texto: {
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: 'Roboto',
    },
});