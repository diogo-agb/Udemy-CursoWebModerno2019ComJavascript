import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { inc } from "./Action";

const Counter = props => {

  //Destructuring
  const { number } = props.counter;


  //Set a format for the number count
  const formatCount = () => {
    return number === 0 ? "Zero" : number
  };

  //Automatic class type for the number
  const getBadgeClasses = number => {
    let classes = "badge m-2 badge-"
    classes += (number === 0) ? "warning" : "primary"
    return classes
  };

  const renderTags = () => {
    //Optional; return a message when a array is empty
    if (props.tag.length === 0) return <p>There are no tags</p>

    //Returning a list of itens in a array
    return <ul>{props.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>
  };


  return (
    <React.Fragment>
      <span className={getBadgeClasses(number)}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={() => props.inc()}>Increment</button>
      {/* {props.tag.length === 0 && "Please create a new tag!"}
      {renderTags()} */}
    </React.Fragment>
  );
};







const mapStateToProps = state => ({ counter: state.counter, tag: state.tag });

const mapDispatchToProps = dispatch => bindActionCreators({ inc }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);


