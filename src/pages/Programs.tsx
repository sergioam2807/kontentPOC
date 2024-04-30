import { useState, useEffect } from 'react'
import { deliveryClient } from '../client/client'
import { type IContentItemElements } from '@kontent-ai/delivery-sdk'
import { Grid, Typography } from '@mui/material'
import ProgramsCard from '../components/ProgramsCard'

const Programs = () => {
  const [programs, setPrograms] = useState<IContentItemElements[] | null>(null)

  useEffect(() => {
    deliveryClient
      .items()
      .type('programs')
      .depthParameter(2)
      .toPromise()
      .then((response) => {
        setPrograms(response.data.items.map((item) => item.elements))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <Grid>
      <Grid display={'flex'} justifyContent={'center'} mt={10} mb={10}>
        <Grid>
          <Typography
            className='typing-effect'
            fontSize={50}
            fontWeight={900}
            sx={{ color: '#301038' }}
          >
            Choose one of our programs
          </Typography>
        </Grid>
      </Grid>
      <Grid
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-around'}
      >
        {programs?.map((program, index) => (
          <Grid key={index}>
            <ProgramsCard
              title={program?.program_title?.value}
              description={program?.program_description?.value}
              levels={program?.levels?.value}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Programs
