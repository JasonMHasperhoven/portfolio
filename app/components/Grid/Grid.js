import React from 'react';
import fadeElements from 'helpers/fadeElements';
import s from './Grid.css';

class Grid extends React.Component {
  componentDidMount() {
    this.props.grid.forEach(area => {
      if (area.content) {
        fadeElements.push(this.refs[area.id]);
      }
    });
  }

  render() {
    return (
      <div className={s.grid}>
        {this.props.grid.map(area => (
          <div className={area.colSpan === 2 ? s.areaDouble : s.areaSingle}
            key={area.id}
            {...area.content ? Object.assign({
              ref: area.id
            }, area.attributes) : {}}>
            {area.content}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
