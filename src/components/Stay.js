/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material"
import { Box , Container} from "@mui/system"
import { Send } from "./Datas";
import TextField from '@mui/material/TextField';

export default function Stay() {
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
       </Box>
    )
}