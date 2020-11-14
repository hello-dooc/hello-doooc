import React ,{ useState } from 'react'
import Header from '@c/header/Header'
import Link from '@c/link/Link'
import Footer from '@c/footer/Footer'
import Disease from './Disease'
import KnowHead from '@c/knowHead/KnowHead'
import Answer from './Answer'
import Training from './Training'
import Love from '@h/love/container/Love'


import banner from '@a/images/banner_dog.png'
import disease_bg from '@a/images/disease_bg_03.jpg'
import { DiseaseWrap } from './StyleDisease'

const KnowUi=() => {
    const [type,setType] = useState(1)
    const callBack=(type)=>{
        setType(type)
    }
    return (
        <>
            <Header ht="503px" bg={banner}></Header>
            <KnowHead callBack={callBack}></KnowHead>
            {
                type===1?<Disease></Disease>:(type===2?<Love></Love>:(type===3?<Training></Training>:(type===4?<Disease></Disease>:(type===5?<Answer></Answer>:<Love />))))
            }
            <Link outerbg={disease_bg}></Link>
            <Footer></Footer>
        </>
    )
}

export default KnowUi
