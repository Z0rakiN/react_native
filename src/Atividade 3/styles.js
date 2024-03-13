import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5', 
        width: '100%', 
        alignItems: 'center', 
        padding: 8, 
        borderRadius: 20, 
        gap: 16,
    },  
    titulo: {
        fontSize: 30, 
        fontWeight: 'bold', 
        margin: 8, 
        marginBottom: 20,
        textAlign: "center"
    }, 
    botao: {
        padding: 16, 
        backgroundColor: '#000', 
        alignItems: 'center',  
        borderRadius: 20,
        width: "80px",
    }, 
    txtBotao: {
        color: '#f5f5f5', 
        fontSize: 32,         
    },
    containerButtons:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    display:{
        width: "100px",
        textAlign: "center",
    },
    wrapper:{
        gap: 8,
        borderWidth: 4,
        borderColor: "black",
        padding: 10,
    },
    zerar:{
        color: "#fff",
    },
    botaoZerar:{
        padding: 16, 
        backgroundColor: '#000', 
        alignItems: 'center',  
        borderRadius: 20,
        flex: 1,
    },
    subtitulo:{
        fontSize: 20,
        fontWeight:300,
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        paddingTop: 12,
        paddingBottom: 12,
    },
    app:{
        backgroundColor: "gray",
        gap: 12,
    }


});

export default styles;