import { Link } from "react-router-dom";
import logo from "../../img/apiDog.png";
import "./Home.css";
import Menu from "../menu/Menu";
function Home() {
    return(
    <div>
          <p class="centrado">
          <img className="i" width="400" height="120" src={logo} ></img>
          </p>
        <Menu/>

    </div>
    )
  }
   export default (Home);