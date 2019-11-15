import React from 'react';
import { Button }  from 'react-native';

const singUp = props => {
  return(
    <Button title="Get Started" onPress = {props.onSingUp} />
  ); 
};

export default singUp;