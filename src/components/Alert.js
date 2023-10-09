import React from 'react';

function Alert(props) {

    const capitalized = (word) =>{
        const lower =word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    //props.alart && is a special case that gives you a option to get around like a if-else statement ,means if it is not props.alert then it will be your given condition
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalized(props.alert.type)}</strong> : {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert;
