import { StyleSheet } from 'react-native';

/* 
    COULEURS DISPONIBLES
    ********************
    LOGO : Maximum Blue green : #2bcbba
    Vert secondaire (plus foncée) : #0fb9b1
    Bleu/Gris foncé : #4b6584
    Bleu/Gris middle : #778ca3
    Bleu/Gris claire : #d1d8e0
    Blanc : #ffffff
    Noir : #000000
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        // margin: 10,
    },
    //POST
    singlePost: {
        // ATTENTION FLEX 1 CALCULE LA HAUTEUR ET LA LARGEUR 
        flexDirection: 'row',
    },
    singlePostHeader:{
        marginBottom: 20,
    },
    singlePostAvatar:{
        marginRight: 15,
    },
    singlePostUser: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2bcbba',
    },
    singlePostDate: {
        fontSize: 10,
    },
});

export default styles;