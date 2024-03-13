import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade_3() {

    const [numero, setNumero] = useState(0);

    function incremento() {
        const inc = numero + 1;
        setNumero(inc);
    }
    function decremento() {
        const dec = numero - 1
        setNumero(dec)
    }

    function zerar() {
        setNumero(0)
    }

    return (
        <View style={styles.container}>
            <View style={styles.app}>
                <View>
                    <Text style={styles.titulo}>Atividade 3</Text>
                    <Text style={styles.subtitulo}>Diga "Olá, mundo!"</Text>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.containerButtons}>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={incremento}
                        >
                            <Text style={styles.txtBotao}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.display}>{numero}</Text>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={decremento}
                        >
                            <Text style={styles.txtBotao}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.botaoZerar}
                        onPress={zerar}
                    >
                        <Text style={styles.zerar}>Zerar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}