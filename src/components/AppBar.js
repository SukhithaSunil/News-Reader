import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';




const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const sections = [
    { title: 'General', url: '/General', icon: <HomeIcon/> },
    { title: 'Business', url: '/Business', icon: <BusinessCenterIcon/>},
    { title: 'Entertainment', url: '/Entertainment', icon: <EmojiSymbolsIcon/> },
    { title: 'Health', url: '/Health', icon: <FitnessCenterIcon/> },
    { title: 'Science', url: '/Science', icon: <WbIncandescentIcon/> },
    { title: 'Sports', url: '/Sports', icon: <DirectionsRunIcon/> },
    { title: 'Technology', url: '/Technology', icon: <ImportantDevicesIcon/>}
 
    
  ];
  const dateToFormat = Date().toLocaleString();
  return (
    <React.Fragment>
         
      <Toolbar className={classes.toolbar}>
    
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          NewsHub        </Typography>
        <Moment>{dateToFormat}</Moment>

       
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            <IconButton aria-label="show 4 new mails" color="inherit">
          
            {section.icon}
         
        </IconButton>
            {section.title}
          </Link>
        ))}
        
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};