import "./index.scss";
import PropTypes from "prop-types";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string,
  strArray: PropTypes.array,
  idx: PropTypes.number,
};
export default AnimatedLetters;
