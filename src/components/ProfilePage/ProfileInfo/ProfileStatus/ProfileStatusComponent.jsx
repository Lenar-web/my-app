import React, {useState,useEffect} from 'react';

let ProfileStatusComponent = (props) => {

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

useEffect( () => {
  setStatus(props.status)
}, [props.status])

let activateEditMode = () => {
  setEditMode(true);
}
 let deactivateEditMode = () => {
  setEditMode(false);
  props.updateStatus(status)
 }
 let onStatusChange = (e) => {
  setStatus(e.currentTarget.value)
}

  return (
    <div>
    
    {!editMode 
    && <p onClick={activateEditMode} className="text-muted">{status || 'No status'}</p>}
    {editMode 
    && <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} type="text" value={status}/>
    }
    </div>
  )
}

export default ProfileStatusComponent