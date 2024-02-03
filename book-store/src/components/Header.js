import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tabs,Tab} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import App from '../App'
import {NavLink} from 'react-router-dom'
const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:"#000000"}} position="sticky">
        <Toolbar>
            <Typography>
            <LibraryBooksIcon></LibraryBooksIcon> </Typography>
<Tabs sx={{ml:"auto"}}  textColor='inherit'  indicatorColor="primary"
value={value} onChange={(e,val)=>setValue(val)}>
    <Tab   LinkComponent={NavLink}  to ="/add" label="Add products"/>
    <Tab LinkComponent={NavLink}  to ="/books" label="Books"/>
    <Tab LinkComponent={NavLink}  to ="/about" label="About Us"/>

</Tabs>
           a

        </Toolbar>

      </AppBar>
    
    
    </div>
  )
}

export default Header
