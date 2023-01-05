/* eslint-disable jsx-a11y/alt-text */
import { Button, Typography } from '@mui/material';
import { Box, Container} from '@mui/system';
import { Awesomes } from './Datas';

export default function Awesome(){
    return(
         <Box sx={{marginTop:'5%'}}>
           <Container>
                     <Box sx={{justifyContent:'center'}}>
                     {Awesomes.map((item) =>(
                         <Box>
                           <Box sx={{width:{xs:'100%' , md:'50%' , display:'block' , marginLeft:'auto' ,marginRight:'auto' ,}}}>
                           <img src={item.image} style={{ width:'100%'}}/>
                            </Box>
                            <Typography variant='h4' sx={{display:'flex' , justifyContent:'center'}}>{item.title}</Typography>
                            <Typography variant='body1' sx={{display:'flex' , justifyContent:'center' , color:'grey' , marginTop:'2%'}}>{item.description}</Typography>
                            <Button sx={{display:'block' , ':hover':{backgroundColor:'#68b8f7'} ,backgroundColor:'#68b8f7' ,marginLeft:'auto' , marginRight:'auto' , width: '25%', color: 'white',  fontWeight: 'bold',  marginTop: '3%',  padding: '14px',  borderRadius: '20px'}}>{item.button}</Button>
                            </Box>
                      ))}   
                     </Box>
            </Container>
         </Box>
    )
}  