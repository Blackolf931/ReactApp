import React, {useEffect, useState} from 'react';
import {Input} from '@mui/material';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMod] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status);
    },[props.status]);

    const activateEditMode = () => {
      setEditMod(true);
    }
    const deactivateEditMode = () => {
      setEditMod(false);
      props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick = {activateEditMode}> {props.status || "No status"} </span>
                </div>
            }
            {editMode &&
                <div>
                    <Input onChange={onStatusChange}
                           autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;