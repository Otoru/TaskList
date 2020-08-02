import React from 'react';
import { useDispatch } from 'react-redux';

import Centered from 'components/templates/centered';
import TaskList from 'components/organisms/taskList';
import IconButon from 'components/atoms/iconButton';
import { Creators } from 'store/theme';

import { Wrapper, Fab, Light } from 'components/pages/home/styled';

const Home: React.FC = () => {
  const dispatcher = useDispatch();
  return (
    <Wrapper>
      <Centered>
        <TaskList />
      </Centered>
      <Fab>
        <IconButon
          onClick={() => dispatcher(Creators.toogleTheme())}
          icon={<Light />}
        />
      </Fab>
    </Wrapper>
  );
};

export default Home;
