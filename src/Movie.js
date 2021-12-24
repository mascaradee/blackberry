import React from "react";
import PropTypes from "prop-types";

/**
 * state가 필요없으면 클래스로 만들 필요 없다.
 *
 */

function Movie({ id, year, title, summary, poster }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
