
import type { NextPage } from "next"
import Card from "../Components/Card/Card"
import 'bootstrap/dist/css/bootstrap.css'
const Interaction:NextPage = ()=> {
    return(
        <div style={{height:"100vh"}} className="bg-white d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-around w-100">
                <Card image="/images/video.svg" buttonTitle="Video Call"/>
                <Card image="/images/text.svg" buttonTitle="Text Messages"/>
                <Card image="/images/qa.svg" buttonTitle=" Queries"/>
            </div>
        </div>
    )
}

export default Interaction