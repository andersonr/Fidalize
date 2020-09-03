import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp
} from "@material-ui/core";
import headerImage from "../../../shared/images/MaoSegurandoCelular.png";
// import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

const styles = theme => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize
    }
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto"
    }
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    }
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important"
    }
  },
  waveBorder: {
    paddingTop: theme.spacing(4)
  },

  noMarginTop: {
    marginTop: "0px"
  }
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div
          className={classNames(
            "container-fluid",
            classes.container,
            classes.noMarginTop
          )}
        >
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={7}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          align="center"
                        >
                          Todos os seus cartões fidelidade<br />
                           na palma da sua mão
                        </Typography>
                      </Box>
                      <Box mb={2}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h6" : "body1"}
                          color="textSecondary"
                          align="center"
                        >
                          Acumule pontos de todos os programas em um só lugar.<br />
                          Podendo trocar esses pontos por recompensas incriveis.<br />
                          <b>
                            Comprou -> Informou CPF ou celular -> Pontuou!!!
                          </b>
                        </Typography>
                      </Box>
                      <Box display="flex" flexDirection="row" justifyContent="space-around" >
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"                        
                        href="https://github.com/dunky11/react-saas-template"
                        startIcon={<AppleIcon></AppleIcon>}
                      >
                        AppStore
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"                        
                        href="https://github.com/dunky11/react-saas-template"
                        startIcon={<AndroidIcon />}
                      >
                        GooglePlay Store
                      </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={4}>
                      <ZoomImage
                        src={headerImage}
                        className={classes.image}
                        alt="Mão segurando celular com imagem do app"
                      />
                      {/* <a href='https://pngtree.com/so/cartão-de-crédito'>cartão-de-crédito png from pngtree.com</a> */}
                      {/* <a href='https://br.freepik.com/fotos/fundo'>Fundo foto criado por jannoon028 - br.freepik.com</a> */}
                      {/* <a href='https://br.freepik.com/fotos/maquete'>Maquete foto criado por freepik - br.freepik.com</a> */}
                      {/* <a href="http://www.freepik.com">Designed by Freepik</a> */}
                      {/* <a href="http://www.freepik.com">Designed by Jannoon028 / Freepik</a> */}
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>

      {/*
        Efeito de onda, bacana, bonito, mas não faz sentido no que estamos fazendo
       */}
      {/* <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      /> */}
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
