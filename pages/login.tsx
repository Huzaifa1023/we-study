import Link from "next/link";
import type {NextPage} from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from "next/router";
const Login:NextPage =()=>{
  const route = useRouter()
  const handleLogin = (e:any)=> {
    e.preventDefault()
    localStorage.setItem("auth","true")
    if(typeof window !== "undefined"){
      window.location.href = "/"
    }
  }
    return (
        <div className="container w-50">
        <h1 className="my-5">We Study</h1>
        <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="d-flex justify-content-between">
                <span>
                    Don't have an account ?
                    <Link href="/signup">
                        <a>Sign Up</a>
                    </Link>
                </span>
                <button onClick={handleLogin} className="btn btn-primary submit_btn">Submit</button>
            </div>
          </form>
    </div>
    )
}

export default Login