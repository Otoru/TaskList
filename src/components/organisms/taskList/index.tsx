import React from 'react';
import { useSelector } from 'react-redux';

import Form, { formRef } from 'components/atoms/form';
import IconButton from 'components/atoms/iconButton';
import List from 'components/molecules/list';
import Card from 'components/molecules/card';
import Date from 'components/atoms/date';
import { Task } from 'store/todos';
import { State } from 'store';

import { Plus } from 'components/organisms/taskList/styled';

const TaskList: React.FC = () => {
  const todos: Task[] = useSelector<State, Task[]>((data) => data.todos);

  const handler = () => {
    const event = new Event('submit');
    formRef.current!.dispatchEvent(event);
  };

  const action = (
    <IconButton helper="Nova tarefa" onClick={handler} icon={<Plus />} />
  );

  return (
    <Card
      title="Minhas tarefas"
      header={<Date />}
      action={action}
      footer={<Form />}
    >
      <List items={todos} />
    </Card>
  );
};

export default TaskList;
