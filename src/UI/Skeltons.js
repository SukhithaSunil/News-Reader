import React from 'react';
import { Skeleton } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";


const Skeltons = () => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Skeleton variant="text" />
        <Skeleton variant="rect" width="100%" height={118} />
        <Skeleton variant="text" /> <Skeleton variant="text" /> <Skeleton variant="text" />
      </Grid>
    )
}

export default Skeltons
