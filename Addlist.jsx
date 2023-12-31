import React, {useState} from "react";
let SN= 0;
const AddList= (props)=>{
    const [name, setName]= useState();
    const [newnames, setNewnames]= useState([]);
    return(
        <>
            <h1>Names:</h1>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
            <button onClick={()=> {
                setNewnames([...newnames , {id: SN++, name:name}]);
            }}>Add</button>
            <ul>
                {newnames.map(newname =>(
                    <li key={newname.id}>{newname.name}</li>
                ))}
            </ul>
        </>
    );
}
export default AddList;