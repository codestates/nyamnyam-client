import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SigninProps } from '@base/types';
import SigninScreen from '../components/SigninScreen';
import { requestSignin, signinError } from '@base/modules/signin';
import { RootState } from '@base/modules';

import { ErrorMsg, ErrorText } from '@base/styles';

export default function Signin({ route, navigation }: SigninProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { title } = route.params;
  const { isSignin, user, error } = useSelector((state: RootState) => state.signin);
  const dispatch = useDispatch();

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleSigninPress = () => {
    if(email.length === 0 || password.length === 0){
      dispatch(signinError('아이디 또는 비밀번호를 입력해주세요.'));
      return;
    }    

    const signinInfo = {
      email,
      password
    };
    
    dispatch(requestSignin(signinInfo));

  };
  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <>
      {!isSignin && error &&
        <ErrorMsg>
          <ErrorText>{error}</ErrorText>  
        </ErrorMsg>
      }

      <SigninScreen
        title={title}
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSignupPress={handleSignupPress}
        handleSigninPress={handleSigninPress}
      />
    </>
  );
}
