
import type { NextPage } from 'next'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
const SignUp:NextPage =()=>{
    return(
        <div className="container w-50">
        <h1 className="my-5">Sign Up</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Name</label>
                <input type="email" className="form-control" id="username" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="d-flex justify-content-between">
                <div className="mb-3 w-50 mx-1">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 w-50 mx-1">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2"/>
                </div>
            </div>

            <div className="dropdown">
                <div className="form-group">
                    <label htmlFor="exampleSelect">Role</label>
                    <select className="form-control" id="exampleSelect">
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                    </select>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <div className="mb-3 w-50 mx-1">
                    <label htmlFor="faculty" className="form-label">Faculty</label>
                    <input type="faculty" className="form-control" id="faculty"/>
                </div>
                <div className="mb-3 w-50 mx-1">
                    <label htmlFor="Education" className="form-label">Education</label>
                    <input type="education" className="form-control" id="Education"/>
                </div>
            </div>
            <div className="d-flex justify-content-between my-5">
                <span>
                    Already Have an account ?
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </span>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default SignUp