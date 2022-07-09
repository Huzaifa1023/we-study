import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routeTypes } from '../../Types';
interface LayoutProps {
    children: React.ReactNode;
    isAuth: boolean|undefined
}

const studentRoutes:routeTypes[] = [
    {id:1,path:"academicinfo",title:"Academic Info"},
    {id:2,path:"liveclass",title:"Live Class"},
    {id:3,path:"studymaterial",title:"Study Material"},
    {id:4,path:"interaction",title:"Interaction"},
]

const Layout = ({ children, isAuth = false }: LayoutProps) => {
    const router = useRouter();
    const currentRoute = router.pathname.substring(1,router.pathname.length)
    return (
        <div className="container-fluid g-0 wrapper">
            <div className="row p-0 m-0">
                {isAuth &&
                    <div className="col-2 side_nav bg-light" style={{height:"100vh"}}>
                        <div className="profile__container d-flex justify-content-center p-3">
                            <div className="text-center">
                                <Image src="/images/profile_pic.svg" alt="user profile" width="100px" height="100px" className="img-fluid" />
                                <h3>Muhammad Huzaifa</h3>
                                <p>2nd Year | Science</p>
                            </div>
                        </div>

                        <div className="nav__container">
                            {studentRoutes.map((route)=> {
                                return (
                                    <Link href={route.path} key ={route.id}>
                                        <button className={`btn ${route.path == currentRoute && "btn-dark"} my-1 w-100`}>{route.title}</button>
                                    </Link>
                                )
                            })
                            }
                        </div>
                    </div>
                }

                <div className={`${isAuth ? "col-10":"col-12"} main_content bg-grey`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout