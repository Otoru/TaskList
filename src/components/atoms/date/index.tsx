import React from 'react';

import { Wrapper, Text } from 'components/atoms/date/styled';

const Moment: React.FC = () => {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  const now: Date = new Date();
  const data = formatter.format(now);
  const info = data.charAt(0).toUpperCase() + data.slice(1);

  return (
    <Wrapper>
      <Text>{info}</Text>
    </Wrapper>
  );
};

export default Moment;
