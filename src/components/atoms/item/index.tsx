import React from 'react';

import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';

import {
  UncheckIcon,
  CheckIcon,
  Wrapper,
  Button,
  Text,
} from 'components/atoms/item/styled';

import { Creators } from 'store/todos';

interface Props {
  status: Boolean;
  text: string;
  id: number;
}

const Item: React.FC<Props> = ({ status, text, id }) => {
  const Icon = status ? UncheckIcon : CheckIcon;

  const dispatcher = useDispatch();
  const handle = (task: number) => dispatcher(Creators.toggleTodo(task));
  const remove = (task: number) => dispatcher(Creators.removeTodo(task));

  return (
    <Wrapper>
      <Button onClick={() => handle(id)}>
        <Icon />
      </Button>
      <Text status={status}>{text}</Text>
      <Button onClick={() => remove(id)}>
        <TiDelete size="1rem" />
      </Button>
    </Wrapper>
  );
};

export default Item;
