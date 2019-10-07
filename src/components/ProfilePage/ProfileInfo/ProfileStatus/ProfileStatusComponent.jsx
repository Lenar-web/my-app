import React, {useState} from 'react';

let ProfileStatusComponent = (props) => {
// state = {
//  editMode: false,
//  status: this.props.status
// }

// activateEditMode = () =>{
//   this.setState({
//     editMode: true
//   });
// }
// deactivateEditMode = () => {
//   this.setState({
//     editMode: false
//   });
//   this.props.updateStatus(this.state.status)
// }
// onStatusChange = (e) => {
//   this.setState({
//     status: e.currentTarget.value
//   });
// }
// componentDidUpdate = (prevProps, prevState) => {
// if(prevProps.status !== this.props.status) {
//   this.setState({
//     status: this.props.status
//   })
// }
// }
let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

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