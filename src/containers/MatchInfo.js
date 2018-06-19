import React from 'react';


class MatchInfo extends React.Component {
  constructor(props){
    super(props);
  }

 render() {
   return (
    <div className="mdc-card">
    <div className="mdc-card__media mdc-card__media--square">
      <div className="mdc-card__media-content">match.title</div>
    </div>
    <div className="mdc-card__actions">
      <div className="mdc-card__action-buttons">
        <button className="mdc-button mdc-card__action mdc-card__action--button">Action 1</button>
        <button className="mdc-button mdc-card__action mdc-card__action--button">Action 2</button>
      </div>
      <div className="mdc-card__action-icons">
        <i className="material-icons mdc-card__action mdc-card__action--icon" tabIndex="0" role="button" title="Share">share</i>
        <i className="material-icons mdc-card__action mdc-card__action--icon" tabIndex="0" role="button" title="More options">more_vert</i>
      </div>
    </div>
  </div>
   );
 }
}

export default MatchInfo;