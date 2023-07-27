import React, { Fragment } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import EastIcon from '@mui/icons-material/East';
export default function Header() {
    const [menuBtn, setMenuBtn] = useState(false)
    const anchor = "right"
    const toggleMenu = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setMenuBtn({...menuBtn, [anchor]: open})
    }

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleMenu(anchor, false)}
          onKeyDown={toggleMenu(anchor, false)}
        >
          <List>
            <ListItem key="home" disablePadding>
                <ListItemButton component={NavLink} to={`/`}>
                  <ListItemIcon>
                    <EastIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"home"} />
                </ListItemButton>
            </ListItem>
            {['About', 'Stack', 'Projects', 'Contact'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={NavLink} to={`/${text.toLocaleLowerCase()}`}>
                  <ListItemIcon>
                    <EastIcon/>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );    

    return (
        <></>
        // <Box className="header" 
        //      sx={{display: "flex",
        //           height: "100px",
        //           width: "100%",
        //           justifyContent: "space-between",
        //           alignItems: "baseline",
        //           background: "rgb(27, 99, 61)",
        //           boxShadow: 10,
        //           position: "fixed",
        //           zIndex: 1,
        //           top: 0
        //           }}>
        //     {/* <NavLink className='navLink' to='/'>JDH</NavLink> */}
        //     <Link className='navLink' underline="none" sx={{ml: "45%",mt: "-10px", fontFamily: "Faster One, cursive", fontSize: "100px", color: "white", textShadow: "-6px -0px 1px rgba(255,255,255,0.5)"}} component={NavLink} to={"/"}>JH</Link>
        //     <Fragment key={anchor}>
        //         <Button onClick={toggleMenu(anchor, true)} sx={{bottom:"10px", right: "5px"}}>
        //             <MenuIcon sx={{fontSize : "50px", color: "white"}}/>
        //         </Button>
        //         <Drawer
        //             anchor={anchor}
        //             open={menuBtn[anchor]}
        //             onClose={toggleMenu(anchor, false)}
        //         >
        //             {list(anchor)}
        //         </Drawer>

        //     </Fragment>
        // </Box>
    )
}