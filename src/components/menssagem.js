import { StyleSheet, Text, View , Image} from 'react-native';

import styles from './styles.js'

import logo from '../../assets/002-1-react-native.png'

const valores = ['Olá mundo1!', 'Olá Mundo!2', 'Olá Mundo!3', "Olá Mundo!4"]

export default function Menssagem({value}){
    return(
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.imagem} source={logo} />
            <Text style={styles.paragraph}>{value}</Text>
            {
                valores.map(valor => <Text>{valor}</Text>)
            }
        </View>
    )
}