import React from "react";
import { connect } from "react-redux";
import { supp } from "../redux/action";


const List = (props) => {
  return (
    <div className="w-50 shadow-sm p-3 mb-5 bg-white rounded m-4">
      <ul className="list-group list-group-flush">
        
        {props.list.map((e,i) => (
          <li className="list-group-item d-flex justify-content-between" key={i}>
            <p>{e}</p> <button className="btn btn-danger" onClick={()=>props.supprimer(i)} >X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps=state=>{
  return{
    list: state.list
  }
}


const mapDispatchToProps=dispatch=>{
  return{
    supprimer: (x)=> dispatch(supp(x))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(List);
