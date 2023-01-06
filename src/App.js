import Clock from "./components/Clock"
import Awesome from "./components/Awesome"
import Slide from "./components/Slide"
import Social from "./components/Social"
import Stay from "./components/Stay"


export default function App() {



    return(
      <div>
        <div>
        <Clock/>
        </div>
        <div>
      <Awesome/>
      </div>
      <div>
      <Slide/>
      </div>
      <div>
        <Social/>
        </div>
        <div>
        <Stay/>
        </div>
      </div>
    )
}