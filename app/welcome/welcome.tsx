import { Link } from "react-router";
import { Header } from "~/Components/Header/header";
import style from "./welcome.module.css"



export function Welcome() {

  return (

    <div>
      
      <Header headerText={"PET NAMES"}></Header>


      <div className={style.linksContainer}>
        <Link to="/nameList" className={style.links}>See list of names</Link>
        <Link to="/nameGenerator" className={style.links}>Generate a name</Link>

      </div>
       
    </div>

   






  );
}
