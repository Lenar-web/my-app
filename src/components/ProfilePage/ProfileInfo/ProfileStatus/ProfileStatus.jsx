import React from 'react';

class ProfileStatus extends React.Component {
state = {
 editMode: false,
 status: this.props.status
}

activateEditMode = () =>{
  this.setState({
    editMode: true
  });
}
deactivateEditMode = () => {
  this.setState({
    editMode: false
  });
  this.props.updateStatus(this.state.status)
}
onStatusChange = (e) => {
  this.setState({
    status: e.currentTarget.value
  });
}
componentDidUpdate = (prevProps, prevState) => {
if(prevProps.status !== this.props.status) {
  this.setState({
    status: this.props.status
  })
}
}
  render() {
  return (
    <div>
    {!this.state.editMode 
    && <p onClick={this.activateEditMode} className="text-muted">{this.state.status || 'no status'}</p>}
    {this.state.editMode 
    && <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
    }
    </div>
  )
}
}

export default ProfileStatus