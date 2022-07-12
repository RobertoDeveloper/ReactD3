import AuthContext from '../common/context/appContext';
import { styled } from '@mui/system';
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { RxRedirect } from '../common/svg/RxRedirect';
import { Text } from '../components/Text';
import { SpaceContainer } from '../components/layout/SpaceContainer';
import { CircularProgress } from '@mui/material';
import { LoginFooter } from '../components/composite/LoginFooter';

const MainContainer = styled('div')(
    ({ theme }) => `
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 0 ${theme.spacing(2.5)};
        align-items: center;
      `
);

const SvgContainer = styled('div')(
    ({ theme }) => `
        max-width: 100%;
        height: auto;
        margin-top: ${theme.spacing(4.5)}
    `
);

const BodyContainer = styled('div')(
    ({ theme }) => `
      text-align: center;
      flex: 1;
      margin-top: ${theme.spacing(4)}
    `
);

const FooterContainer = styled('div')(
    ({ theme }) => `
      flex: 0;
      padding: 0 0 ${theme.spacing(4.25)} 0;
    `
);

export const RedirectPage = () => {
    const navigate = useNavigate();
    const authData = useContext(AuthContext);

    useEffect(() => {
        if (!authData?.loading && !authData?.token) {
            navigate('/');
            return;
        }

        if (!authData?.loading && authData?.token) {
            navigate('/homepage');
        }
    });
    
    return (
        <MainContainer>
            <BodyContainer>
                <SpaceContainer bottomSize='md'>
                    <Text variant='h5' component='h5'>
                        Getting Ready...
                    </Text>
                </SpaceContainer>

                <SpaceContainer bottomSize='lg'>
                    <SvgContainer>
                        <RxRedirect></RxRedirect>
                    </SvgContainer>
                </SpaceContainer>
                <CircularProgress />
            </BodyContainer>

            <FooterContainer>
                <LoginFooter
                    description='This HIPAA-compliant website was automatically generated by your healthcare provider to offer you useful information and savings on your medications.'
                    linkOne='Privacy'
                    linkTwo='Terms' />
            </FooterContainer>
        </MainContainer>
    );
}