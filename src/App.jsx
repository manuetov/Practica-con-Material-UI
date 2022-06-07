import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, 
    CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from "@material-ui/icons";
// Estilos 
import useStyles from './styles/styles';

const cards = [1, 2, 3, 4, 5, 6]

const App = () =>{
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
{/* ------------------------------------ Contenedor NAVBAR ----------------------------------- */}
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icons}/>
                    <Typography variant="h6"> Photo Albun</Typography> 
                </Toolbar>
            </AppBar>
            <main>
{/* ------------------------------------ Contenedor CABECERA --------------------------------- */}
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{ marginTop: '50px'}}>  
                        <Typography variant="h2" align="center" color="textPrimary"
                         gutterBottom>Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary"
                         paragraph>Hola a todos este es un album de fotos
                        </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                     Mis fotos </Button>
                            </Grid>
                        </Grid>
                    </div>
                    </Container>
                </div>
{/* ------------------------------------ Contenedor IMAGENES --------------------------------- */}
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {/* maps */}
                    {cards.map((c) => (
                        <Grid item key={c} xs={12} sm={6} md={4}> {/* responsive*/}
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image='https://source.unsplash.com/random'
                                    title='Image title'
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading</Typography>
                                    <Typography>
                                        esta es una media card. puedes usar esta seccioón para 
                                        escribir su contenido
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Ver</Button>
                                    <Button size="small" color="secundary">Editar</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}                             
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default App;