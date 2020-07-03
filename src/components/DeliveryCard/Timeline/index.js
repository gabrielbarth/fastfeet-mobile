import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Line,
  StatusContainer,
  LabelContainer,
  Dot,
  Label,
} from './styles';

export default function Timeline({ start = null, end = null }) {
  const taked = !!start;
  const finished = !!end;

  return (
    <Container>
      <Line />
      <StatusContainer>
        <LabelContainer>
          <Dot filled />
          <Label>Awaiting Withdrawal</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filled={taked} />
          <Label>Withdrawn</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filled={finished} />
          <Label>Delivered</Label>
        </LabelContainer>
      </StatusContainer>
    </Container>
  );
}

Timeline.defaultProps = {
  start: null,
  end: null,
};

Timeline.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
};
