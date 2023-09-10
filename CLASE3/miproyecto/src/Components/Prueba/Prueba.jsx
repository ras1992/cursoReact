import React from 'react';
import {motion} from "framer-motion"

const Prueba = () => {
    
const misVariantes={
    hidden:{
        opacity:0,
        x:'100vw'
    },
    visible:{
        opacity:1,
        x:0
    }
}

    return(
        <motion.div 
            initial={{y:-150}}
            animate={{y:-10}}
            
            // animate={{rotateZ:180, opacity:0.2, mt:150}}
            // transition={{ duration: 1 }}
        >
            <motion.h2 
                // animate={{fontSize:50, color:'#ff2587', x:100, y:75}}

                // initial={{x:'100vw'}}
                // animate={{x:0}}

                variants={misVariantes}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3, type:'spring' }}
            >Hola mundo</motion.h2>
                
                <motion.button
                    whileHover={{
                        scale:1.1,
                        textShadow:"0px 0px 5px red"
                    }}
                    // animate={{scale:1.5}}
                >
                    Enviar Email!
                </motion.button>

            
        </motion.div>
    )
}

export { Prueba }