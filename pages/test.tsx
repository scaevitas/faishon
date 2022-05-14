import type { NextPage } from 'next'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Transition, GroupedTransition } from '@mantine/core';
import { image_search } from 'duckduckgo-images-api';
import Image from 'next/image';

const Test: NextPage = ()=>{
    const [pics, setPics] = useState([])
    function getImages(search:string){
        if (!search) search="Fashion"
        image_search({query:search, moderate:true}).then(results=>console.log(results))
    }
    useEffect(()=>{
        getImages("Street Fashion")
    },[])
    return(
        <>
            <div id="bg"/>
            <div style={{width:"100%", height:"100%",top:"0", position:"fixed", zIndex:"30", background:"rgba(0,0,0,0.75)", left:"0"}}>
            <div style={{position:"fixed", width:"500px", background:"white", borderRadius:"5%", height:"100%", left:"50%", transform:"translateX(-50%)"}}>
                <div style={{display:"grid"}}>
                    {pics.map((image:string, index:number)=>{return(
                        <Transition key={index} mounted={true} transition="slide-right" duration={500} timingFunction="easeIn">
                            {(styles)=>(
                            <div style={{...styles,textAlign:"left", padding:"1em", gridColumn:"1", gridRow:"1", zIndex:index}}>
                                <Image src={image} alt={image} layout={"fill"}/>
                            </div>
                        )}
                        </Transition>
                    )})}
                </div>
                <div style={{display:"flex", flexDirection:"row", height:"auto", width:"100%", alignItems:"center", justifyContent:"center"}}>
                    <div className='circle'><FontAwesomeIcon size="2xl" icon={faXmark} style={{color:"rgb(254,133,113)"}}/></div>
                    <div className='circle'><FontAwesomeIcon size="2xl" icon={faHeart} style={{color:"rgb(159, 226,191)"}}/></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Test