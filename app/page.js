'use client'
import { useState } from "react";



export default function Home() {
    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Open Tab")

    function handleOpen(){
     if(open === true){
        setOpen(false);
        setButtonText("Open Tab");
     }else{
        setOpen(true);
        setButtonText("Close Tab");
     }
    }

    return (
        <main >
            <button onClick={handleOpen}>{buttonText}</button>
            { open && <h1>WooHoo I'm a POPUP!</h1>}
        </main>
    );
}
