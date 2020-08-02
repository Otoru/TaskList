import React from 'react';

import { Wrapper } from 'components/templates/columns/styled';

const Columns: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Columns;
