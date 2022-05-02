import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserStack from './components/stacks/UserStack';
import { RecoilRoot } from 'recoil'


const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <UserStack />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;