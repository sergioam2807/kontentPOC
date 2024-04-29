import { useState, useEffect } from 'react'
import { Grid, Typography, Paper, TextField, Box, Button } from '@mui/material'
import { deliveryClient } from '../client/client'
import relax from '../assets/study2.svg'
import { type IContentItemElements } from '@kontent-ai/delivery-sdk'

const LandingPage = () => {
  const [content, setContent] = useState<IContentItemElements | null>(null)

  useEffect(() => {
    deliveryClient
      .items()
      .type('landingpage')
      .toPromise()
      .then((response) => {
        setContent(response?.data?.items[0]?.elements)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

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
          >
            <Typography
              variant='h1'
              fontSize={'56px'}
              color={'#301038'}
              fontWeight={900}
              textAlign={'center'}
            >
              {content?.title?.value}🚀
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
              {content?.sub_title?.value}
            </Typography>
            <Typography
              variant='body2'
              color={'white'}
              fontWeight={700}
              fontSize={'18px'}
            >
              {content?.description?.value}
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
              {content?.title_icon?.value}!
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
                <TextField size='small' placeholder='example@example.com' />
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
                />
              </Grid>
              <Button
                variant='contained'
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
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
