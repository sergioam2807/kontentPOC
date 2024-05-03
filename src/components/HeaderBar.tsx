import { Avatar, Box, Grid, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

const HeaderBar = () => {
  const userProfileString: string | null = localStorage.getItem('userProfile')
  let userProfile = null
  if (userProfileString !== null && userProfileString !== '') {
    userProfile = JSON.parse(userProfileString)
  }
  console.log(userProfile)

  const avatarName =
    userProfile !== null && userProfile !== undefined
      ? `${userProfile.name.split(' ')[0].charAt(0)}${userProfile.name
          .split(' ')[1]
          .charAt(0)}`
      : 'NA'

  const avatarImage =
    userProfile !== null && userProfile !== undefined
      ? userProfile.picture
      : null

  return (
    <Grid>
      <Grid
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={2}
        bgcolor={'#ffffff'}
        sx={{ borderBottom: '1px solid #573661' }}
      >
        <Typography
          variant='h5'
          color={'#301038'}
          textAlign={'center'}
          fontWeight={900}
        >
          BagdeUp!
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon color='action' />
          <InputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              border: '1px solid #301038',
              borderRadius: '10px',
              minWidth: '300px',
              pl: '10px'
            }}
          />
        </Box>
        <Grid
          mr={5}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={3}
        >
          <Typography color={'#301038'} fontWeight={700} fontSize={'15px'}>
            {userProfile.name}
          </Typography>
          <Avatar sx={{ bgcolor: '#301038' }} src={avatarImage}>
            {avatarName}
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeaderBar
