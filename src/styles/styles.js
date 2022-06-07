import { makeStyles } 
from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // Contenedor NAVBAR
    icons : {
        marginRight:'20px',
    },
    // Contenedor CABECERA
    container: {
        backgroundColor : 
        theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    buttons: {
        marginTop: '40px'
    },
    // Contenedor IMAGENES
    cardGrid: {
        padding: '20px 0'
    },

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    cardMedia: {
        paddingTop: '56.25%' //16:9

    },
    cardContent: {
        flexGrow: 1
    }
}));

export default useStyles;