import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, withTheme, Box, Button, Paper, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle } from '@material-ui/icons';
import api from '../../../shared/services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
    height: 320
  },
  cardNovaCampanha: {
    maxWidth: 375,
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: 'center',
    background: theme.palette.secondary.main,
    color: '#fff'
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  addIcon: {
    height: 120,
    width: 120,
  },
}));

function CampaignArea(props) {
  const classes = useStyles();
  const { theme } = props;
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function loadCampaigns() {
      const tokenLocalStorage = localStorage.getItem('@fides:token');
      try {
        const response = await api.get('/campaign', { headers: { Authorization: `Bearer ${tokenLocalStorage}` } });
        setCampaigns(response.data.campaigns);
      }
      catch { }
    }

    loadCampaigns();
  }, []);


  return (
    <>
      <div>
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Campanhas
        </Typography>
        </Box>
        <Grid container spacing={3} justify="center" alignItems="center">
          {campaigns.map(c =>
            <Grid item lg={3} md={4} sm={6}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://img.cybercook.com.br/receitas/527/massa-de-pizza-7-623x350.jpeg"
                    title="Contemplative Reptile"
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {c.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {c.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Compartilhar
        </Button>
                  <Button size="small" color="primary">
                    Editar
        </Button>
                </CardActions>
              </Card>
            </Grid>)
          }
          <Grid item lg={3} md={4} sm={6}>
            <Card >
              <CardActionArea className={classes.cardNovaCampanha}>
                <AddCircle className={classes.addIcon} />
                <Typography gutterBottom variant="h5" component="h2">
                  Nova campanha
                    </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

CampaignArea.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(CampaignArea);
