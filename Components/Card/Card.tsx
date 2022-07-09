import Image from "next/image"
import React from "react";
import styles from './card.module.css';

interface cardProps {
    image:string,
    buttonTitle:string,
    style?:React.CSSProperties,
    className?:string
}
const Card = ({image,buttonTitle,style,className}:cardProps)=> {
    return(
        <div className={`${styles.cardContainer} ${className}`} style={style}>
            <Image src={image} width={100} height={100} />
            <button className="btn btn-dark w-75 mt-5">{buttonTitle}</button>
        </div>
    )
}

export default Card