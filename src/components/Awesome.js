/* eslint-disable jsx-a11y/alt-text */
import { Button, Typography } from '@mui/material';
import { Box, Container} from '@mui/system';
import { Awesomes } from './Datas';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <Box sx={{marginTop:'5%'}}>
       {Awesomes.map((item) =>(
           <Container>
                     <Box sx={{justifyContent:'center'}}>
                         <Box>
                           <Box sx={{width:{xs:'100%' , md:'50%' , display:'block' , marginLeft:'auto' ,marginRight:'auto' ,}}}>
                           <img src={item.image} style={{ width:'100%'}}/>
                            </Box>
                            <Typography variant='h4' sx={{display:'flex' , justifyContent:'center'}}>{item.title}</Typography>
                            <Typography  sx={{display:'flex' , justifyContent:'center' , color:'grey' , marginTop:'2%'}}>{item.description}</Typography>
                            <Button sx={{display:'block' , ':hover':{backgroundColor:'#68b8f7'} ,backgroundColor:'#68b8f7' ,marginLeft:'auto' , marginRight:'auto' , width:'10rem', color: 'white',  fontWeight: 'bold',  marginTop: '4%',  padding: '14px',  borderRadius: '20px'}}>{item.button}</Button>
                            </Box>
                     </Box>
      <Button variant="contained" onClick={handleClickOpen} sx={{marginLeft:'auto' , marginRight:'auto' ,display:'block' , marginTop:'4%'}}>
        Open popup
      </Button>
      <Dialog
        open={open}
        keepMounted
        sx={{width:'100%'}}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
        <Box sx={{justifyContent:'center'}}>
                         <Box>
                           <Box sx={{width:{xs:'100%' , md:'50%' , display:'block' , marginLeft:'auto' ,marginRight:'auto' ,}}}>
                           <img src={item.image} style={{ width:'100%'}}/>
                            </Box>
                            <Typography variant='h4' sx={{display:'flex' , justifyContent:'center'}}>{item.title}</Typography>
                            <Typography  sx={{display:'flex' , justifyContent:'center' , color:'grey' , marginTop:'2%'}}>{item.description}</Typography>
                            <Button sx={{display:'block' , ':hover':{backgroundColor:'#68b8f7'} ,backgroundColor:'#68b8f7' ,marginLeft:'auto' , marginRight:'auto' , width:'10rem', color: 'white',  fontWeight: 'bold',  marginTop: '4%',  padding: '14px',  borderRadius: '20px'}}>{item.button}</Button>
                            </Box>
                     </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </Container>
        ))} 
      </Box>
    </div>
  );
}