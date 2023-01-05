/* eslint-disable jsx-a11y/alt-text */
import { Button, Typography } from '@mui/material';
import {Box, Container} from '@mui/system';
import { Swipe } from "./Datas";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Slide(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <Box sx={{marginTop:'8%'}}>
            <Container>         
            {Swipe.map((item) =>(
                <Slider {...settings}>
                    <div>
               <Box>
                  <Box sx={{width:{xs:'100%' , md:'50%'} , marginLeft:'auto' , marginRight:'auto'}}>
                    <img src={item.image} style={{width:'100%'}}/>
                  </Box>
                  <Box >
                  <Typography sx={{display:'flex' , justifyContent:'center' , color:'#99afde'}}>{item.title}</Typography>
                 <Typography sx={{display:'flex' , justifyContent:'center' , color:'#99afde' , marginTop:'1%'}}>{item.description}</Typography>
               <Button sx={{background: '#4776e6',fontWeight:'bold' ,':hover':{backgroundColor:'#4776e6'} ,marginLeft: 'auto',  marginRight: 'auto',  display: 'block',  marginTop: '6%',  width: '18%', padding: '1%',  color: 'white',    borderRadius: '29px'}}>{item.button}</Button>
                  </Box>
               </Box>
                </div>
                <div>
               <Box>
                  <Box sx={{width:{xs:'100%' , md:'50%'} , marginLeft:'auto' , marginRight:'auto'}}>
                    <img src={item.image} style={{width:'100%'}}/>
                  </Box>
                  <Box >
                  <Typography sx={{display:'flex' , justifyContent:'center' , color:'#99afde'}}>{item.title}</Typography>
                 <Typography sx={{display:'flex' , justifyContent:'center' , color:'#99afde' , marginTop:'1%'}}>{item.description}</Typography>
               <Button sx={{background: '#4776e6',fontWeight:'bold' ,':hover':{backgroundColor:'#4776e6'} ,marginLeft: 'auto',  marginRight: 'auto',  display: 'block',  marginTop: '6%',  width: '18%', padding: '1%',  color: 'white',    borderRadius: '29px'}}>{item.button}</Button>
                  </Box>
               </Box>
                </div>
                <div>
               <Box>
                  <Box sx={{width:{xs:'100%' , md:'50%'} , marginLeft:'auto' , marginRight:'auto'}}>
                    <img src={item.image} style={{width:'100%'}}/>
                  </Box>
                  <Box >
                  <Typography sx={{display:'flex' , justifyContent:'center' , color:'#99afde'}}>{item.title}</Typography>
                 <Typography sx={{display:'flex' , justifyContent:'center' , color:'#99afde' , marginTop:'1%'}}>{item.description}</Typography>
               <Button sx={{background: '#4776e6',fontWeight:'bold' ,':hover':{backgroundColor:'#4776e6'} ,marginLeft: 'auto',  marginRight: 'auto',  display: 'block',  marginTop: '6%',  width: '18%', padding: '1%',  color: 'white',    borderRadius: '29px'}}>{item.button}</Button>
                  </Box>
               </Box>
                </div>
               </Slider>
            ))}
            </Container>
        </Box>
    )
}