import React, { useState } from 'react'
import '../calculator/style.css'

function Calculator() {
    const [value, setValue]=useState('')
    function handleData(e){
        setValue(value+e.target.value)

    }
  return (
    
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className='display'>
                    
                        <input type="text" value={value}/>
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={e=>setValue('')} />
                        <input type="button" value="DE" onClick={e=>setValue(value.slice(0, -1))} />
                        <input type="button" value="." onClick={handleData}/>
                        <input type="button" value="/" onClick={handleData}/>

                    </div>
                    <div>
                        <input type="button" value="7" onClick={handleData}/>
                        <input type="button" value="8" onClick={handleData}/>
                        <input type="button" value="9" onClick={handleData}/>
                        <input type="button" value="*" onClick={handleData}/>

                    </div>
                    <div>
                        <input type="button" value="4" onClick={handleData}/>
                        <input type="button" value="5" onClick={handleData}/>
                        <input type="button" value="6" onClick={handleData}/>
                        <input type="button" value="+" onClick={handleData}/>

                    </div>
                    <div>
                        <input type="button" value="1" onClick={handleData}/>
                        <input type="button" value="3" onClick={handleData}/>
                        <input type="button" value="-" onClick={handleData} />
                        <input type="button" value="2" onClick={handleData}/>

                    </div>
                    <div>
                        <input type="button" value="00" onClick={handleData}/>
                        <input type="button" value="0" onClick={handleData}/>
                        <input type="button" value="=" onClick={e=>setValue(eval(value))} />
                        <input type="button" value="%" onClick={handleData}/>

                        

                    </div>
                    
                </form>
            </div>
        </div>
    
  )
}

export default Calculator
