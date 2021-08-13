import React, {useState, useEffect} from 'react'

const Timer=() => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function Toggle(){
        setIsActive(!isActive);
    }

    function Reset(){
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
       let interval = null;

       if (isActive){
           interval = setInterval (() => {
               setSeconds(seconds+1)
           }, 1000);
       }
       else if (!isActive && seconds !==0){
           clearInterval(interval);
       }
        return () => {
            clearInterval(interval);
        }
    }, [isActive, seconds])

    return (
        <div>
            <div className="flex-center">
                <label>Timer: {seconds}</label> <br/>
                <button className="btn btn-light" onClick={Toggle}>{isActive?"Pause":"Start"}</button>
                <button className="btn btn-light" onClick={Reset}>End</button>
            </div>
        </div>
        
    )
}
export default Timer