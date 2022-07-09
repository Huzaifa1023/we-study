import type { NextPage } from "next"
import Card from "../Components/Card/Card"
import 'bootstrap/dist/css/bootstrap.css'
const StudyMaterial:NextPage = ()=> {
    return(
        <div style={{height:"100vh"}} className="bg-white d-flex justify-content-center align-items-center">
            <Card buttonTitle="Download Material" image="/images/download.svg" className="mx-2" />
            <Card buttonTitle="Upload Material" image="/images/upload.svg" className="mx-2" />
        </div>
    )
}

export default StudyMaterial