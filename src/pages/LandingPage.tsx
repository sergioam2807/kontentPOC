import { useState, useEffect } from 'react'
import { Grid, Typography, Paper, TextField, Box, Button } from '@mui/material'
import { deliveryClient } from '../client/client'
import { useAuth0 } from '@auth0/auth0-react'
import relax from '../assets/study2.svg'
import { type IContentItem } from '@kontent-ai/delivery-sdk'
import { useNavigate } from 'react-router-dom'
import KontentSmartLink from '@kontent-ai/smart-link'

const LandingPage = () => {
  const [content, setContent] = useState<IContentItem | null>(null)
  const navigate = useNavigate()
  const { loginWithRedirect, isAuthenticated, user } = useAuth0()

  useEffect(() => {
    deliveryClient
      .items()
      .type('landingpage')
      .toPromise()
      .then((response) => {
        setContent(response?.data?.items[0])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    const kontentSmartLink = KontentSmartLink.initialize({
      defaultDataAttributes: {
        projectId: import.meta.env.VITE_APP_KONTENT_PROJECT_ID,
        languageCodename: 'default'
      },
      queryParam: 'preview'
    })

    return () => {
      kontentSmartLink.destroy()
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('userProfile', JSON.stringify(user))
      navigate('/programs')
    }
  }, [isAuthenticated, navigate])

  return (
    <Grid
      display={'flex'}
      width={'100%'}
      height={'100dvh'}
      position={'relative'}
    >
      <Grid
        flex={1}
        sx={{ background: 'linear-gradient(to bottom, #A786B1, #573661)' }}
        display={'flex'}
        flexDirection={'column'}
      >
        <Grid mt={5} p={'0 150px'} zIndex={1}>
          <Grid
            bgcolor={'rgba(255, 255, 255)'}
            p={4}
            borderRadius={'20px'}
            mt={7}
            data-kontent-item-id={content?.system?.id}
          >
            <Typography
              variant='h1'
              fontSize={'56px'}
              color={'#301038'}
              fontWeight={900}
              textAlign={'center'}
              data-kontent-element-codename='title'
            >
              {content?.elements?.title?.value}🚀
            </Typography>
          </Grid>
        </Grid>
        <Grid
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          mt={10}
        >
          <Box
            component={'img'}
            src={relax}
            position={'absolute'}
            width={900}
            sx={{
              opacity: 0.4
            }}
          />
        </Grid>
        <Grid mt={25} p={'0 80px'} gap={2} zIndex={1}>
          <Grid
            boxShadow='3px 3px 6px #00000029'
            bgcolor={'#1E0624'}
            display={'flex'}
            flexDirection={'column'}
            borderRadius={'20px'}
            p={6}
            gap={2}
          >
            <Typography
              variant='body1'
              color={'white'}
              textAlign={'center'}
              fontWeight={900}
              fontSize={'20px'}
            >
              {content?.elements?.sub_title?.value}
            </Typography>
            <Typography
              variant='body2'
              color={'white'}
              fontWeight={700}
              fontSize={'18px'}
            >
              {content?.elements?.description?.value}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        flex={1}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid>
          <Grid mb={6}>
            <Typography
              variant='h2'
              color={'#301038'}
              textAlign={'center'}
              fontWeight={900}
            >
              {content?.elements?.title_icon?.value}!
            </Typography>
          </Grid>
          <Paper elevation={24} square={false} sx={{ borderRadius: '20px' }}>
            <Grid p={5} display={'flex'} flexDirection={'column'} gap={2}>
              <Grid display={'flex'} flexDirection={'column'} gap={1}>
                <Typography
                  fontWeight={900}
                  fontSize={'14px'}
                  color={'#301038'}
                >
                  Username
                </Typography>
                <TextField
                  size='small'
                  placeholder='example@example.com'
                  disabled
                />
              </Grid>
              <Grid display={'flex'} flexDirection={'column'} gap={1}>
                <Typography
                  fontWeight={900}
                  fontSize={'14px'}
                  color={'#301038'}
                >
                  Password
                </Typography>

                <TextField
                  size='small'
                  placeholder='Password'
                  type='password'
                  disabled
                />
              </Grid>
              <Button
                variant='contained'
                onClick={() => {
                  void loginWithRedirect()
                }}
                disabled
                sx={{
                  backgroundColor: '#301038',
                  fontWeight: '700',
                  '&:hover': {
                    backgroundColor: '#A786B1',
                    color: '#301038',
                    fontWeight: '700'
                  }
                }}
              >
                Login
              </Button>
              <Button
                variant='contained'
                onClick={() => {
                  void loginWithRedirect()
                }}
                sx={{
                  backgroundColor: '#301038',
                  fontWeight: '700',
                  '&:hover': {
                    backgroundColor: '#A786B1',
                    color: '#301038',
                    fontWeight: '700'
                  }
                }}
              >
                SSO
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
