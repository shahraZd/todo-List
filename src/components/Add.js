import React from "react";
import { connect } from "react-redux";
import { add } from "../redux/action";

class Add extends React.Component {
  constructor(props) {
      super(props)
    this.state = {
      inputValue: ""
    };
  }
  render() {
      console.log(this.state.inputValue)
      
    return (
      <div className="w-50 m-4 d-flex">
        <input
          type="text"
          onChange={e => {
            this.setState({
                inputValue: e.target.value
            });
          }}
          className="form-control m-2 h-25"
          id="exampleInputEmail1"
          placeholder="I wanna do..."
        />
        <button
          type="button"
          className="btn btn-primary m-2 h-25"
          onClick={()=> this.props.add(this.state.inputValue)}
        >
          Save
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (x) => dispatch(add(x))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Add);
