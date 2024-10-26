import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Link } from "react-router-dom";


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

<List> 

<div className='flex justify-center'> 
<span className='text-[#4079c4] text-[16px] font-[YekanBakhBold]'> HELLO WORLD </span> 
</div>
</List>
<Divider />
      <List>

        {['خانه'].map((text, index) => (
          <Link to="/" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>  
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        ))}
        
      </List>
      <List>
        {['دوره‌ها'].map((text, index) => (
          <Link to="/CoursesPage" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EqualizerIcon/>  
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <List>
        {['اساتید'].map((text, index) => (
          <Link to="/" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EqualizerIcon/>  
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <List>
        {['  اخبار و مقالات'].map((text, index) => (
          <Link to="/" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EqualizerIcon/>  
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        ))}
      </List>

      <List>
        {['  ارتباط با ما '].map((text, index) => (
          <Link to="/" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EqualizerIcon/>  
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        ))}
      </List>


     
    </Box>
  );

  return (
    <div>
      {['دسته‌بندی'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button  onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
          className='text-[20px]'
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
