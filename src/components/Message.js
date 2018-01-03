import React from 'react';
import Label from './Label'
const Message = ({email, index, clicky, stars, box, selected}) => {


  return (
    <div className={`row message ${(email.read) ? "read": "unread"} ${(selected[email.id-1] === true) ? "selected": ""}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">


            <input type="checkbox" onClick={(e)=> box(e,email.id-1)} defaultChecked={`${(selected===true) ? "checked" : ""}`}/>
          </div>


          <div className="col-xs-2">
            <i className={`star fa ${(stars[email.id]===true) ? 'fa-star-o': 'fa-star'}`} onClick={(e)=>clicky(e, email.id)}></i>
          </div>


        </div>
      </div>
      <div className="col-xs-11">
        {email.labels.map((label, index)=>{
          return <Label key={index} item={label} />
        })}
        <a href="#">
          {email.subject}
        </a>
      </div>
    </div>
  );
}


export default Message;
