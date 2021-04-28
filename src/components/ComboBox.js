import React,{useState} from 'react'

const ComboBox = () => {

    const [langstate, setLangState]= useState("");

    return (
        <div>
            <select className="dpdown" 
            value={langstate} 
            onChange={(e)=> {
                const selectedLang=e.target.value;
                setLangState(selectedLang);
            }}
            >
                <option value="select">Select a Language</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="c#">C#</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="ruby">Ruby</option>
                <option value="cotlin">Cotlin</option>
                <option value="swift">Swift</option>
                
            </select>
            {/* {langstate} */}
        </div>
    )
}

export default ComboBox
