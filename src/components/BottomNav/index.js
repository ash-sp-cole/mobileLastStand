import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';



const  Nav = () => {
  const useStyles = makeStyles({

    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    }
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction as={Link} to="/drink" label="Recents" icon={<RestoreIcon  />}  />
      <BottomNavigationAction as={Link} to="/drink" label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction   as={Link} to="/drink" label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
export default Nav;
