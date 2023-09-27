import React from "react";
import PropTypes from "prop-types";
import fadeElements from "../../helpers/fadeElements";
import s from "./Grid.module.scss";

class Grid extends React.Component {
  componentDidMount() {
    this.props.grid.forEach((area) => {
      if (area.content) {
        fadeElements.push(this.refs[area.id]);
      }
    });
  }

  render() {
    return (
      <div className={s.grid}>
        {this.props.grid.map((area) => (
          <div
            key={area.id}
            {...(area.content
              ? Object.assign(
                  {
                    ref: area.id,
                  },
                  area.attributes
                )
              : area.attributes)}
          >
            {area.content}
          </div>
        ))}
      </div>
    );
  }
}

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grid;
