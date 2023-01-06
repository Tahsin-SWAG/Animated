/* eslint-disable jsx-a11y/alt-text */
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Swipe } from "./Datas";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swipe_icons } from "./Datas";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


export default function Slide() {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ marginTop: "8%" }}>
      <Container sx={{ width: { xs: "95%", md: "80%" }}}>
        {Swipe.map((item) => (
          <Slider {...settings}>
            <div>
              <Box>
                <Box
                  sx={{
                    width: { xs: "35%", md: "15%" },
                    display: "flex",
                    marginLeft: { xs: "2rem", md: "25rem" },
                  }}
                >
                  {Swipe_icons.map((item) => (
                    <img
                      src={item.icon}
                      style={{
                        width: "60%",
                        margin: "10%",
                        borderRadius: "100px",
                      }}
                    />
                  ))}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                      marginTop: "1%",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    sx={{
                      background: "#4776e6",
                      fontWeight: "bold",
                      ":hover": { backgroundColor: "#4776e6" },
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      marginTop: "6%",
                      width: { xs: "6rem", md: "18%" },
                      padding: "1%",
                      color: "white",
                      borderRadius: "29px",
                    }}
                  >
                    {item.button}
                  </Button>
                </Box>
              </Box>
            </div>
            <div>
              <Box>
                <Box
                  sx={{
                    width: { xs: "35%", md: "15%" },
                    display: "flex",
                    marginLeft: { xs: "2rem", md: "25rem" },
                  }}
                >
                  {Swipe_icons.map((item) => (
                    <img
                      src={item.icon}
                      style={{
                        width: "60%",
                        margin: "10%",
                        borderRadius: "100px",
                      }}
                    />
                  ))}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                      marginTop: "1%",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    sx={{
                      background: "#4776e6",
                      fontWeight: "bold",
                      ":hover": { backgroundColor: "#4776e6" },
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      marginTop: "6%",
                      width: { xs: "6rem", md: "18%" },
                      padding: "1%",
                      color: "white",
                      borderRadius: "29px",
                    }}
                  >
                    {item.button}
                  </Button>
                </Box>
              </Box>
            </div>
            <div>
              <Box>
                <Box
                  sx={{
                    width: { xs: "35%", md: "15%" },
                    display: "flex",
                    marginLeft: { xs: "2rem", md: "25rem" },
                  }}
                >
                  {Swipe_icons.map((item) => (
                    <img
                      src={item.icon}
                      style={{
                        width: "60%",
                        margin: "10%",
                        borderRadius: "100px",
                      }}
                    />
                  ))}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                      marginTop: "1%",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    sx={{
                      background: "#4776e6",
                      fontWeight: "bold",
                      ":hover": { backgroundColor: "#4776e6" },
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                      marginTop: "6%",
                      width: { xs: "6rem", md: "18%" },
                      padding: "1%",
                      color: "white",
                      borderRadius: "29px",
                    }}
                  >
                    {item.button}
                  </Button>
                </Box>
              </Box>
            </div>
          </Slider>
        ))}
      </Container>
      <Button variant="contained" onClick={handleClickOpen} sx={{marginLeft:'auto' , marginRight:'auto' ,display:'block' , marginTop:'7%'}}>
        Popup
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >  
        <DialogContent sx={{overflow:'hidden'}}>
        {Swipe.map((item) => (
          <Slider {...settings} style={{width:'95%' , marginLeft:'auto' , marginRight:'auto' }}>
            <div>
              <Box>
                <Box
                  sx={{display:'flex' , justifyContent:'center' , marginTop:'5%' , width:'20%' , marginLeft:'auto' , marginRight:'auto'}}
                >
                 
                  {Swipe_icons.map((item) => (      
                    <img
                      src={item.icon}
                      style={{
                        width: "60%",
                        margin: "10%",
                        borderRadius: "100px",
                      }}    />    
                      
                      ))}

                </Box>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                      marginTop: "1%",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </div>
            <div>
              <Box>
              <Box
                  sx={{display:'flex' , justifyContent:'center' , marginTop:'5%' , width:'20%' , marginLeft:'auto' , marginRight:'auto'}}
                >
                 
                  {Swipe_icons.map((item) => (      
                    <img
                      src={item.icon}
                      style={{
                        width: "60%",
                        margin: "10%",
                        borderRadius: "100px",
                      }}    />    
                      
                      ))}
                    
                </Box>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                      marginTop: "1%",
                    }}
                  >
                    {item.description}
                  </Typography>
                 
                </Box>
              </Box>
            </div>
            <div>
              <Box>
              <Box
                  sx={{display:'flex' , justifyContent:'center' , marginTop:'5%' , width:'20%' , marginLeft:'auto' , marginRight:'auto'}}
                >
                 
                  {Swipe_icons.map((item) => (      
                    <img
                      src={item.icon}
                      style={{
                        width: "60%",
                        margin: "10%",
                        borderRadius: "100px",
                      }}    />    
                      
                      ))}
                    
                </Box>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#99afde",
                      marginTop: "1%",
                    }}
                  >
                    {item.description}
                  </Typography>
                  
                </Box>
              </Box>
            </div>
          </Slider>
        ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{marginTop:'-75%'}}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
