import React from 'react';

import Item from 'components/atoms/item';
import { Task } from 'store/todos';

import { Ul } from 'components/molecules/list/styled';

interface Props {
  items: Task[];
}

const List: React.FC<Props> = ({ items }) => {
  const hasItems = Boolean(items.length);
  return (
    <>
      {hasItems && (
        <Ul>
          {items.map((item: Task) => (
            <Item
              key={item.id}
              text={item.text}
              status={item.complete}
              id={item.id}
            />
          ))}
        </Ul>
      )}
    </>
  );
};

export default List;
