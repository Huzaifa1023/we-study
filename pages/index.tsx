import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Home: NextPage = () => {
  const router = useRouter()  
  useEffect(()=> {
    if (typeof window !== 'undefined') {
      const auth = JSON.parse(localStorage.getItem('auth') || "false")
      if(!auth){
        router.push("/login")
      }
    }
  },[])
  return (
    <div className={styles.container}>
      <Image src="/images/teacher.svg" width={200} height={200} />
      <h1>Welcome To <span style={{color:"#6C63FF"}}>We Study</span></h1>
    </div>
  )
}

export default Home
