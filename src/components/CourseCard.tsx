import { Box, Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import ModalSuggestions from './ModalSuggestions'

interface CourseCardProps {
  title: string
  topic: string
  description: string
  link: string
  spoc: string
  hours: string
  image: string
}

const CourseCard = ({
  title,
  topic,
  description,
  link,
  spoc,
  hours,
  image
}: CourseCardProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      border={'1px solid #301038'}
      borderRadius={'10px'}
      p={'20px 30px'}
      gap={1}
    >
      <Grid display={'flex'}>
        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box
            component={'img'}
            src={image}
            width={300}
            height={300}
            borderRadius={'10px'}
          />
        </Grid>
        <Grid flex={2} ml={4}>
          <Grid>
            <Typography fontWeight={900} variant='h4' color='#301038'>
              {title}
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={'14px'}
              color={'#A786B1'}
              mt={1}
            >
              {topic}
            </Typography>
          </Grid>
          <Grid mt={3}>
            <Typography fontWeight={600} variant='body1'>
              {description}
            </Typography>
            <Grid display={'flex'} gap={3}>
              <Typography fontWeight={700} mt={2} color={'#301038'}>
                Suggested Course:
              </Typography>
              <Typography fontWeight={700} mt={2} color={'#301038'}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  {link}
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid display={'flex'} justifyContent={'space-between'} mt={4}>
            <Typography fontWeight={900} color={'#301038'} fontSize={'14px'}>
              {spoc}
            </Typography>
            <Typography fontWeight={900} color={'#301038'} fontSize={'14px'}>
              {hours} propoused
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid display={'flex'} justifyContent={'end'}>
        <Button
          variant='contained'
          onClick={handleOpen}
          sx={{
            bgcolor: '#573661',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: '#41254D'
            }
          }}
        >
          Leave Course Suggestions
        </Button>
        <ModalSuggestions open={open} handleClose={handleClose} />
      </Grid>
    </Grid>
  )
}

export default CourseCard
