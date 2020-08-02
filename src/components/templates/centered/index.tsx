import React from 'react';

import { Wrapper } from 'components/templates/centered/styled';

const Centered: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Centered;
