import f1 from "../../img//lp/f1.jpg";
import f2 from "../../img/lp/f2.jpg";
import f3 from "../../img/lp/f3.jpg";
import f4 from "../../img/lp/f4.jpg";
import f5 from "../../img/lp/f5.jpg";
import f6 from "../../img/lp/f6.jpg";
import f7 from "../../img/lp/f7.jpg";
import f8 from "../../img/lp/f8.jpg";
import f9 from "../../img/lp/f9.jpg";
import f10 from "../../img/lp/f10.jpg";
import f11 from "../../img/lp/f11.jpg";
import f12 from "../../img/lp/f12.jpg";
import logo from "../../img/apiDog.png";
import { Link } from "react-router-dom";
import "./inicial.css"
function LandingPage() {
    return(
    <div>
          <p class="centrado">
          <img className="i" width="400" height="120" src={logo} ></img>
          </p>
          <div className="content-all">
           <div class="content-carrousel">
           <figure><img src={f1}/></figure>
           <figure><img src={f2}/> </figure>
           <figure><img src={f3}/></figure>
           <figure><img src={f4}/> </figure>
           <figure><img src={f5}/> </figure>
           <figure><img src={f6}/> </figure>
           <figure><img src={f7}/> </figure>
           <figure><img src={f8}/> </figure>
           <figure><img src={f9}/> </figure>
           <figure><img src={f10}/> </figure>
           <figure><img src={f11}/> </figure>
           <figure><img src={f12}/> </figure>
           </div>
          </div>

          <div  className="content-all">
          <Link to="/Home">
          <button   className="button">Ir al Home</button>
          </Link>
          </div>

    </div>
    )
  }
   export default (LandingPage);