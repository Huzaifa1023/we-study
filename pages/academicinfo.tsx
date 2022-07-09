import type { NextPage } from "next"
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"
const AcademicInfo:NextPage = ()=> {
    return(
        <div style={{height:"100vh"}} className="bg-white p-5">
            <div className="d-flex flex-column align-align-items-center">
                <Image src={"/images/profile_pic.svg"} height={100} width={100} />
                <h3 className="text-center">Muhammad Huzaifa</h3>
            </div>
            <div className="text-center">
                <h5 className="my-3">Grade: 2nd Year</h5>
                <h5 className="my-3">Faculty: Science</h5>
                <h5 className="my-3">Selected Subjects: Maths,Physics,Computer</h5>
            </div>
        </div>
    )
}

export default AcademicInfo