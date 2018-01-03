
import React from 'react';


const Toolbar = ({selectSquare, selectAll, markRead}) => {
  let checkBox = ()=>{
    if(selectSquare.includes(false)){
      return "fa fa-minus-square-o"
    }
    else{return "fa fa-check-square-o"}
  }

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <button className="btn btn-default">
          <i className={checkBox()} onClick={(e)=>selectAll()}></i>
        </button>

        <button className="btn btn-default" onClick={(e)=>{markRead(e) }}>
          Mark As Read
        </button>

        <button className="btn btn-default">
          Mark As Unread
        </button>

        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  );
}

export default Toolbar
