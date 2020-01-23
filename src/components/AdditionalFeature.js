import React from "react";
import { addFeature } from "./Reducers/CarActions";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      <button
        className="button"
        onClick={() => props.addFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
