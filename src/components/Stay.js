/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material"
import { Box , Container} from "@mui/system"
import { Send } from "./Datas";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function Stay() {

   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };
    return(
       <Box>
         <Container sx={{marginTop:'10%'}}>
            {Send.map((item) => (
               <Box>
                  <Box sx={{marginLeft:'auto' , marginRight:'auto' , display:'block' , width:{xs:'100%' , md:'60%'}}}><img src={item.image} style={{width:'100%' }}/></Box>
               <Box>
                  <Typography variant="h4" sx={{display:'flex' , justifyContent:'center'}}>{item.title}</Typography>
                  <Typography sx={{display:'flex' , justifyContent:'center' , marginTop:'1%'}}>{item.description}</Typography>
               </Box>
               <TextField fullWidth label="Enter your email address" id="fullWidth" sx={{width:{xs:'60%' , md:'40%'} , marginLeft:'auto' , marginRight:'auto' , display:'block' , marginTop:'3%'}}/>
               </Box>
            ))}
         </Container>
         <Button variant="contained" onClick={handleClickOpen} sx={{marginLeft:'auto' , marginRight:'auto' , display:'block' , marginTop:'2%'}}>
        Popup
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
      >
        <DialogContent>
        {Send.map((item) => (
               <Box>
                  <Box sx={{marginLeft:'auto' , marginRight:'auto' , display:'block' , width:{xs:'100%' , md:'60%'}}}><img src={item.image} style={{width:'100%' }}/></Box>
               <Box>
                  <Typography variant="h4" sx={{display:'flex' , justifyContent:'center'}}>{item.title}</Typography>
                  <Typography sx={{display:'flex' , justifyContent:'center' , marginTop:'1%'}}>{item.description}</Typography>
               </Box>
               <TextField fullWidth label="Enter your email address" id="fullWidth" sx={{width:{xs:'60%' , md:'40%'} , marginLeft:'auto' , marginRight:'auto' , display:'block' , marginTop:'3%'}}/>
               </Box>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          
        </DialogActions>
      </Dialog>
       </Box>
    )
}