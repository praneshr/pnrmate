import React, {PropTypes} from 'react';
import pages from '../pages/'

export default class MainTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const RenderPage = pages[this.props.pageName.toUpperCase()]
    return (
      <div className="pnrmate">
        <RenderPage {...this.props} />
      </div>
    );
  }
}
