import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    spinner: {
        color: '#00BDD3',
        animationDuration: '550ms',
      },
      circle: {
        strokeLinecap: 'round',
      },

  }));

const Spinner = () => {
    const classes = useStyles();
    return(
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.spinner}
                classes={{
                  circle: classes.circle,
                }}
                size={48}
            />
        </Grid>
    )
}
export default  Spinner;