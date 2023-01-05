import  Watch  from  '../assets/byzbyz_com_free_icon_clock.svg';
import  Time_Clock  from  '../assets/byzbyz_com_free_icon_watch.svg';
import  Crown from  '../assets/byzbyz_com_free_icon_crown.svg';
import Frame from '../assets/byzbyz_com_free_icon_frame.svg';
import Inbox from '../assets/byzbyz_com_free_icon_send.svg';
import Calender from '../assets/byzbyz_com_free_icon_calender.svg';
import Gallary from '../assets/byzbyz_com_free_icon_gallary.svg';
import Light from '../assets/byzbyz_com_free_icon_light.svg';


const Clocks = [
    {
        "title":"Success",
        "description":"Congratulations for your first appointment sucessfully",
        "image": Watch,
        "button":"ok"
    },
    {
        "title":"Verfication",
        "description":"Your information in the audit, please wait",
        "image": Time_Clock,
        "button":"ok"
    }
]
const Awesomes = [
    {
        "title":"AWESOME",
        "description":"Now you can become a member of our community",
        "image":Crown,
        "button":"JOIN US  >"
    }
]
const Swipe = [
    {
        "title":"With the new Macbook, we set out to do the impossible — engineer a full-size experience",
        "description":"Into the thinnest, lightest Mac notebook yet. And not only is it compact —",
        "button":"CHECK",
        "image":Frame
    }
]
const Swipe_icons = [
    {
        "icon":Gallary
    },{
        "icon":Calender
    },{
        "icon":Light
    }
]



const React_list = [
    {
        "list_title":'Export in all formats :',
        "list_description":"AMP , HTML OR ANIMATION GIF "
    },
    {
        "list_title":"Banner generator :",
        "list_description":"Build 40+ sizes and more"
    }
    ,
    {
        "list_title":"Animations :",
        "list_description":"Timeline , templete and animations present"
    }
    ,
    {
        "list_title":"Brand library :",
        "list_description":"Brand library , logo , icon and more"
    }
    ,
    {
        "list_title":"Magic animate :",
        "list_description":"Full control over animation"
    }
]

const Send = [
    {
       "title":"Send your message",
         "description":"Send your message to your friends and family",
            "image":Inbox,
    }
]

export {Clocks , Awesomes , Swipe , Send, Swipe_icons , React_list}