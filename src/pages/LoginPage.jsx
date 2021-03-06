import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/system';
import Grow from '@mui/material/Grow';

import { LoginHeader } from '../components/composite/LoginHeader';
import { LoginForm } from '../components/composite/LoginForm';
import { LoginFooter } from '../components/composite/LoginFooter';
import { SpaceContainer } from '../components/layout/SpaceContainer';

import { mockAuthData } from '../common/api/auth';
import { sendEvent } from '../common/api/event';
import { AuthSetContext } from '../common/context/appContext';

const MainContainer = styled('div')(    
  ({ theme }) => `
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      padding: 0 ${theme.spacing(2.5)}
    `
);

const BodyContainer = styled('div')(
  ({ theme }) => `
    flex: 1;
    margin-top: ${theme.spacing(4)}
  `
);

const FooterContainer = styled('div')(
  ({ theme }) => `
    flex: 0;
    padding: ${theme.spacing(4.25)} 0
  `
);

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const setAuth = useContext(AuthSetContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        await sendEvent();
      } catch (err) { }
    })();
  }, []); 

  const handleSubmit = async () => {
    setLoading(true); 
    try {
      const data = await mockAuthData(true); 
      setAuth(data); 
      navigate('/homepage');
    } catch(err) {
      setLoading(false); 
      alert('Error, Try again...');
    }
  }

  return (
      <Grow direction='up' in={true}>
        <MainContainer>
          <BodyContainer>
            <SpaceContainer bottomSize='md'>
              <LoginHeader 
                header='Verify your identity'
                subHeader='For your privacy and security, please enter your date of birth.'
                bottomSize='sm' />
            </SpaceContainer>
            <LoginForm onSubmit={handleSubmit} loading={loading}/>
          </BodyContainer>
          <FooterContainer>
            <LoginFooter 
              description='This HIPAA-compliant website was automatically generated by your healthcare provider to offer you useful information and savings on your medications.'
              linkOne='Privacy'
              linkTwo='Terms'/>
          </FooterContainer>
        </MainContainer>
      </Grow>
  )
}
