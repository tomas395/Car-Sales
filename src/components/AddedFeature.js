import React from "react";
import { removeFeature } from "./Reducers/CarActions";
import { connect } from "react-redux";

const AddedFeature = props => {
  console.log(props);
  //   // MVP needs an onclick to remove feature and have it reflected in the price total ↓↓↓
  return (
    <li>
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
