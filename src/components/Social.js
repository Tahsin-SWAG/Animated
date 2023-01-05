/* eslint-disable jsx-a11y/alt-text */
import { Typography } from '@mui/material';
import {Box , Container} from '@mui/system';
import { Reacts } from './Datas';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import image from '../assets/byzbyz_com_free_icon_react.svg'

export default function Social(){

    return(
      <Box sx={{marginTop:'8%'}}>
        <Container>
       <Typography variant='h4' sx={{display:'flex' , justifyContent:'center'}}>Engage more people using animated GIFs</Typography>
            <Typography variant='body1' sx={{display:'flex' , justifyContent:'center' , color:'grey' , marginTop:'2%'}}>Update to pro and get access to :</Typography>
         <Box sx={{display:{xs:'block' , md:'flex'}}}>
         <Box sx={{width:{xs:'100%' , md:'20%' }}}>
            <img src={image} style={{width:'100%'}}/>
          </Box>
          <Box sx={{marginTop:'5%' , marginRight:'auto'}}>
            {Reacts.map((item) =>(
             <List sx={{display:'flex' , width:{xs:'100%' , md:'110%'}}}>      
                  <ListItemText sx={{fontWeight:'bold'}}>{item.list_title}</ListItemText>
                  <ListItemText primary={item.list_description}/>       
             </List>
            ))}
          </Box>
           </Box>
          </Container>
      </Box>
    )
}