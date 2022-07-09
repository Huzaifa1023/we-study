import type { NextPage } from "next"
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.css'
const LiveCLass:NextPage = ()=> {
    return(
        <div style={{height:"100vh"}} className="bg-white d-flex justify-content-center align-items-center">
            <div className="text-center">
                <Image src="/images/education.svg" width={200} height={200} />
                <h3>There is no Live Class Going on</h3>
            </div>
        </div>
    )
}

export default LiveCLass