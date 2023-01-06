/* eslint-disable jsx-a11y/alt-text */
import { Typography , Button} from '@mui/material';
import {Box , Container} from '@mui/system';
import { React_list} from './Datas';
import * as React from 'react';
import List from '@mui/material/List';
import image from '../assets/byzbyz_com_free_icon_react.svg';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function Social(){
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };

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
         <Button variant="contained" onClick={handleClickOpen} sx={{marginLeft:'auto' , marginRight:'auto' , display:'block'}}>
       Popup
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
      >
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
        </DialogActions>
      </Dialog>
      </Box>
    )
}