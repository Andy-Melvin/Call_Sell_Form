import React from "react";
const Logo = ()=>{
    const [firstName, setFirstName] = useState('');
    return(
        <div>
            <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} /> <br />
        </div>
    );
    

}
export default App;