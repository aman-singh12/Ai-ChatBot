import React, { useContext, } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {

const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)    


  return (
    <div className='main'>
        <div className="nav">
            <p>Generative AI 🤖</p>
            <img src={assets.download} alt="Error" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span> Hello, User. </span><span1>🙋‍♂️</span1></p>
                <p>Did you have any questions?  </p>
            </div>
            <div className="main-bottom">
                
                <div className="search-box">
                    
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter promt here' /> 
                    <div>                   
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt=""  />
                        
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>  
                </div>
                <p className="bottom-info">
                    **Genrative_AI may display inaccurate info, including about people, so double-check its response.Your privacy and Gemini Apps.**
                </p>
            </div>
            
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places for travelling in India.</p>
                    <a href="https://www.lonelyplanet.com/articles/best-places-to-visit-in-india"  target="_blank" rel="noopener noreferrer" >
                    <img src={assets.compass_icon} alt="" />
                    </a>
                </div>
                <div className="card">
                    <p> What is Artifical Intelligence ? Briefly Explain about it. </p>
                    <a href="https://www.geeksforgeeks.org/what-is-artificial-intelligence/"  target="_blank" rel="noopener noreferrer" >
                    <img src={assets.bulb_icon} alt="" />
                    </a>
                </div>
                <div className="card">
                    <p> What is the current Temperature of Gwalior,India ?</p>
                    <a href="https://www.msn.com/en-us/weather/forecast/in-Gwalior,MP?loc=eyJsIjoiR3dhbGlvciIsInIiOiJNUCIsInIyIjoiR3dhbGlvciIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi11cyIsIngiOiI3OC4xNzYyIiwieSI6IjI2LjIyMDExIn0%3D&ocid=ansmsnweather&weadegreetype=C"
                     target="_blank" rel="noopener noreferrer" >
                    <img src={assets.message_icon} alt="" />
                    </a>
                </div>

                <div className="card">
                    <p>Write a code for developing simple website ? </p>
                    <a href="https://www.bing.com/chat?q=Write+a+code+for+developing+simple+website+%3f&sendquery=1&FORM=SCCODX" target="_blank" rel="noopener noreferrer" >
                    <img src={assets.code_icon} alt="" />
                    </a>
                </div> 
            </div> 
            </>
            :<div className='result'>
                <div className="result-title">
                   <p><h1>👇</h1></p>
                        <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className="loader">
                        <hr />
                        <hr />
                     </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                </div>
            </div>
            }

            

            
        </div>
    </div>
  )
}

export default Main 