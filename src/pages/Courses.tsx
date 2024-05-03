import { useEffect, useState } from 'react'
import { deliveryClient } from '../client/client'
import { useLocation, useParams } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { Grid, Typography } from '@mui/material'
import { createManagementClient } from '@kontent-ai/management-sdk'

interface Course {
  id: string
  name: string
  level: string
  area_name: string
  learning_expectatio: string
  link_suggested: string
  topic: string
  spoc: string
  training_hrs: string
  course_image: string
}

const clientMangement = createManagementClient({
  environmentId: import.meta.env.VITE_APP_KONTENT_PROJECT_ID,
  apiKey: import.meta.env.VITE_APP_KONTENT_API_KEY
})

const Courses = () => {
  const { level } = useParams<{ level: string }>()
  const [courses, setCourses] = useState<Course[]>([])
  const location = useLocation()

  const userProfileString: string | null = localStorage.getItem('userProfile')
  let userProfile = null
  if (userProfileString !== null && userProfileString !== '') {
    userProfile = JSON.parse(userProfileString)
  }

  const pathParts = location.pathname.split('/')
  const pathName = pathParts[2]
  const capitalizedPathName =
    pathName.charAt(0).toUpperCase() + pathName.slice(1)
  useEffect(() => {
    deliveryClient
      .items()
      .type('levels')
      .depthParameter(2)
      .toPromise()
      .then(async (response) => {
        const levelItem = response?.data?.items?.find(
          (item) => item.system.codename === level
        )
        const levelCourses = levelItem?.elements?.program_levels?.value

        return await deliveryClient
          .items()
          .type('courses')
          .inFilter('system.codename', levelCourses)
          .depthParameter(2)
          .toPromise()
      })
      .then((response) => {
        const filteredCourses: Course[] = response?.data?.items?.map((item) => {
          return {
            id: item.system.id,
            name: item.system.name,
            level: item.elements.level_title?.value,
            area_name: item.elements.area_name?.value,
            learning_expectatio: item.elements.learning_expectatio?.value,
            link_suggested: item.elements.link_suggested?.value,
            topic: item.elements.topic?.value,
            spoc: item.elements.spoc?.value,
            training_hrs: item.elements.training_hrs?.value,
            course_image: item.elements?.course_image?.value[0]?.url
          }
        })
        setCourses(filteredCourses)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [level])

  useEffect(() => {
    clientMangement
      .addContentItem()
      .withData({
        name: 'Nombre del nuevo elemento',
        type: {
          codename: 'suggestions'
        }
      })
      .toPromise()
      .then(async (response) => {
        console.log('idylactm', response.data.id)

        await new Promise((resolve) => setTimeout(resolve, 5000))

        await clientMangement
          .upsertLanguageVariant()
          .byItemId(response.data.id)
          .byLanguageCodename('default')
          .withData((builder) => {
            return {
              elements: [
                builder.textElement({
                  element: {
                    codename: 'user_name'
                  },
                  value: `${userProfile?.name}`
                }),
                builder.textElement({
                  element: {
                    codename: 'suggestion_title'
                  },
                  value: 'Título de la sugerencia'
                }),
                builder.textElement({
                  element: {
                    codename: 'suggestion_description'
                  },
                  value: 'Descripción de la sugerencia'
                })
              ]
            }
          })
          .toPromise()
      })
      .then((response) => {
        console.log('Publicado:', response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [level])

  return (
    <Grid>
      <Grid
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={6}
        mb={-6}
      >
        <Typography variant='h2' fontWeight={900} color={'#301038'}>
          {capitalizedPathName} Courses
        </Typography>
      </Grid>
      <Grid>
        {courses.map((course, index) => (
          <Grid key={index} p={20}>
            <CourseCard
              title={course?.area_name}
              description={course?.learning_expectatio}
              link={course?.link_suggested}
              spoc={course?.spoc}
              hours={course?.training_hrs}
              topic={course?.topic}
              image={course?.course_image}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Courses
