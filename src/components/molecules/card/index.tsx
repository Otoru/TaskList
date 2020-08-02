import React, { ReactNode } from 'react';

import Columns from 'components/templates/columns';

import {
  Wrapper,
  Content,
  Action,
  Footer,
  Header,
  Title,
} from 'components/molecules/card/styled';

interface Props {
  header?: ReactNode;
  action?: ReactNode;
  footer?: ReactNode;
  title?: string;
}

const Card: React.FC<Props> = ({ header, action, title, footer, children }) => {
  return (
    <Wrapper>
      <Columns>
        {header && <Header>{header}</Header>}
        <Content>
          {title && <Title>{title}</Title>}
          {children}
        </Content>
        {footer && <Footer>{footer}</Footer>}
      </Columns>
      {action && <Action>{action}</Action>}
    </Wrapper>
  );
};

export default Card;
