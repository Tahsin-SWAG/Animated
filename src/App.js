import Clock from "./components/Clock"
import Awesome from "./components/Awesome"
import Slide from "./components/Slide"
import Social from "./components/Social"
import Stay from "./components/Stay"
import { useState , useEffect} from "react"

export default function App() {

  const [popup_1 , setPopup_1] = useState(true)
  const [popup_2 , setPopup_2] = useState(false)
  const [popup_3 , setPopup_3] = useState(true)
  const [popup_4 , setPopup_4] = useState(false)
  const [popup_5 , setPopup_5] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPopup_1((prev) => !prev)
      setPopup_2((prev) => !prev)
      setPopup_3((prev) => !prev)
      setPopup_4((prev) => !prev)
      setPopup_5((prev) => !prev)
    }, 10000)
  } , [])



    return(
      <div>
        <div style={{display:popup_1 === false ? 'none' : 'block'}}>
        <Clock/>
        </div>
        <div style={{display:popup_2 === false ? 'none' : 'block'}}>
      <Awesome/>
      </div>
      <div style={{display:popup_3 === false ? 'none' : 'block'}}>
      <Slide/>
      </div>
      <div style={{display:popup_4 === false ? 'none' : 'block'}}>
        <Social/>
        </div>
        <div style={{display:popup_5 === false ? 'none' : 'block'}}>
        <Stay/>
        </div>
      </div>
    )
}