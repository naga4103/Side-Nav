import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import './Ham.css'
import { useState } from 'react'

const Ham=()=>{


    const [isClicked,setIsClicked]=useState(false)



const onDisplay=()=>{

return <h1>Hello</h1>


}

    return(




        <>
        
          <button
           
           type="button"
        


            style={{border:"2px solid green"}}


            onClick={

                onDisplay
            }
          >
           <GiHamburgerMenu size="30" />
         </button>



        </>

    )
}

export default Ham