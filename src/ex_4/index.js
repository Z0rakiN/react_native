import { View, Text, TextInput, Pressable } from 'react-native'
import { useState } from 'react'

import styles from './style'

export default function Exemplo4() {

    const [mensagem, setMensagem] = useState('Sua mensagem aqui')
    const [mensagem2, setMensagem2] = useState('Sua mensagem aqui')
    const [mensagemTela, setMensagemTela] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>
            <Text style={styles.txtSaida}>{mensagem}</Text>

            <TextInput
                style={styles.txtEntrada}
                placeholder='Digite o texto aqui...'
                onChangeText={(txt) => setMensagem(txt)}
            />
            <Text style={styles.txtSaida}>{mensagemTela}</Text>
            <TextInput
                style={styles.txtEntrada}
                placeholder='Outro texto'
                onChangeText={(entrada) => setMensagem2(entrada)}
                value={mensagem2}
            />
            <Pressable onPress={() => {
                setMensagemTela(mensagem2)
                setMensagem2('')
            }}>
                Mostrar texto
            </Pressable>
        </View>
    )
}