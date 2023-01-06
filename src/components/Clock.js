import {Box , Container} from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Clocks } from './Datas';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



export default function Clock() {

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
        <Box>
              <Container>              
                <Box sx={{ display:{xs:'block' ,md:'flex'}}}>  
                {Clocks.map((item) => (         
                                <Card sx={{width:{xs:'100%' , md:345} , margin:{xs:'0%' , md:'10%'} ,  backgroundColor:'#fbfbfb' , borderRadius:'5%' , marginTop:{xs:'5%' , md:'0'}}}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        image={item.image}
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        </CardContent>
                                        <Button sx={{color: 'white', backgroundColor: '#ff3966',  width: '44%',  marginTop: '13px',  marginBottom: '19px',  marginLeft: '27%' , ":hover":{background:'pink'}}}>{item.button}</Button>
                                    </CardActionArea>
                                </Card>
                ))}
                        </Box> 
        <Button variant="contained" onClick={handleClickOpen} sx={{marginLeft:'auto' , marginRight:'auto' , display:'block' , marginTop:'2%'}}>
        Open popup
      </Button>
         <Dialog
        open={open}
        sx={{width:'100%'}}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
        {Clocks.map((item) => (         
                                <Card sx={{width:'100%' , marginTop:'2%'}}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        image={item.image}
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        </CardContent>
                                        <Button sx={{color: 'white', backgroundColor: '#ff3966',  width: '44%',  marginTop: '13px',  marginBottom: '19px',  marginLeft: '27%' , ":hover":{background:'pink'}}}>{item.button}</Button>
                                    </CardActionArea>
                                </Card>
                ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
             </Container>
        </Box>
    )
}