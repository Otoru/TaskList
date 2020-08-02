import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Wrapper, Text, Label, Span } from 'components/atoms/form/styled';
import { Creators } from 'store/todos';

export const formRef: React.RefObject<HTMLFormElement> = React.createRef();

const Form: React.FC = () => {
  const [content, setContent] = useState('');
  const dispatcher = useDispatch();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (content) {
      dispatcher(Creators.addTodo(content));
      setContent('');
    }
  };

  const setter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <Wrapper ref={formRef} onSubmit={onSubmit}>
      <Label>
        <Text
          onChange={setter}
          value={content}
          maxLength={48}
          pattern=".+"
          type="text"
          required
        />
        <Span>Tarefa</Span>
      </Label>
    </Wrapper>
  );
};

export default Form;
