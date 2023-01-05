/* eslint-disable jsx-a11y/alt-text */
import { Typography } from '@mui/material';
import {Box , Container} from '@mui/system';
import { React_list} from './Datas';
import * as React from 'react';
import List from '@mui/material/List';
import image from '../assets/byzbyz_com_free_icon_react.svg'

export default function Social(){

    return(
      <Box sx={{marginTop:'8%'}}>
        <Container> 
            <Box sx={{display:{xs:'block' , md:'flex'}}}>
               <Box><img src={image}/></Box>
               <Box>
                  <Typography variant='h4' sx={{display:'flex' , justifyContent:'center'}}>Engage more people using animated GIFs</Typography>
                  <Typography sx={{display:'flex' , justifyContent:'center' , color:'grey' , marginTop:'2%'}}>Update to PRO and get access to :</Typography>
               <Box>      
                      {React_list.map((item) => (
                          <List sx={{bgcolor:'background.paper' , display:'flex' , marginTop:'3%'}}>
                          <Typography variant='h6'>{`${item.list_title}  ${item.list_description}`}</Typography>
                          </List>
                     ))}
               </Box>
               </Box>
            </Box>
         
         </Container>
      </Box>
    )
}