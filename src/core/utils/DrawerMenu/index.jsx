import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import img3 from "@assets/images/navbar/HW.png";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
   
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
        {['HELLO WORLD'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <img className='h-[30px] w-[30px] ' src={img3}/>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Link to="/">
        {[ 'خانه'].map((text, index) => (
          <ListItem  key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText  primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Link>
      <Link to="/CoursesPage">
        {['دوره‌ها'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Link>
      <Link to="*">
        {[ 'اساتید'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Link>
      <Link to="*">
        {[ 'ارتباط با ما'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Link>

      <Link to="/NewsPage">
        {['اخبار و  مقالات'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Link>






    </Box>
  );

  return (
    <div dir="ltr" className=''>
      {['دسته‌بندی‌ها'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button classes={{root:"!border-[4px] !border-[#3c8bcc] !bg-[#59a9eb] !text-[12px] !text-white !font-[YekanBakh] !h-[43px] !w-[100px] !rounded-[30px] "}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={"right"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
