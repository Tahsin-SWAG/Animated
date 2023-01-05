import Clock from "./components/Clock"
import Awesome from "./components/Awesome"
import Slide from "./components/Slide"
import Social from "./components/Social"
import Stay from "./components/Stay"
import { useState , useEffect} from "react"

export default function App() {

  const [popup , setPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPopup((prev) => !prev)
    }, 10000);
  }, [popup])


    return(
      <div style={{display:popup === false ? 'none' : 'block'}}>
        <Clock/>
        <Awesome/>
        <Slide/>
        <Social/>
        <Stay/>
      </div>
    )
}