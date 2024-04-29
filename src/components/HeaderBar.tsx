import { Avatar, Box, Grid, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

const HeaderBar = () => {
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
        <Grid mr={5}>
          <Avatar sx={{ bgcolor: '#301038' }}>SA</Avatar>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeaderBar
