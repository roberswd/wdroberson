import React from "react";
import PropTypes from "prop-types";

const SectionTitle = (props) => {
  const { title } = props;

  return <h1 id={title}> {title}</h1>;
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
