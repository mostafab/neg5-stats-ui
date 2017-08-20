import React from 'react';
import PropTypes from 'prop-types';
import { chunk, floor } from 'lodash';
import { Col, Row } from 'react-bootstrap';

import TournamentSummaryPanel from './TournamentSummaryPanel';

const BOOTSTRAP_MAX_COLS = 12;

export default class TournamentPanelsWrapper extends React.Component {

  static propTypes = {
    panelsPerRow: PropTypes.number,
    tournaments: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    panelsPerRow: 3,
  }

  render() {
    const { tournaments, panelsPerRow } = this.props;
    const chunks = chunk(tournaments, panelsPerRow);
    const colWidth = floor(BOOTSTRAP_MAX_COLS / panelsPerRow);
    return (
      <div>
        {
          chunks.map((chunk, i) =>
            <Row className='TournamentsSummaryRow' key={i}>
              {
                chunk.map(tournament =>
                  <Col className='TournamentSummaryCol' key={tournament.id} lg={colWidth} md={colWidth} sm={12}>
                    <TournamentSummaryPanel tournament={ tournament }/>
                  </Col>
                )
              }
            </Row>
          )
        }
      </div>
    )
  }
};
