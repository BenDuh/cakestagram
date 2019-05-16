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
    },
    homeConnexion: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: '#2bcbba',
    },
    //CONNEXION APPLI
    bgColorBleuGrisFonce: {
        backgroundColor: '#4b6584',
    },
    bgColorLogo: {
        backgroundColor: '#2bcbba',
    },
    //POST
    singlePost: {
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
        fontSize: 12,
    },
});

export default styles;