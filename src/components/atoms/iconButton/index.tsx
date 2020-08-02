import React, { ReactNode, MouseEventHandler } from 'react';

import { Btn, Wrapper, Tooltip } from 'components/atoms/iconButton/styled';

interface Props {
  onClick: MouseEventHandler;
  helper?: string;
  icon: ReactNode;
}

const IconButon: React.FC<Props> = ({ icon, onClick, helper }) => {
  return (
    <Wrapper>
      <Btn onClick={onClick}>{icon}</Btn>
      {helper && <Tooltip>{helper}</Tooltip>}
    </Wrapper>
  );
};

export default IconButon;
