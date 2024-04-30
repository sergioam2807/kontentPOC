import { useEffect, useState } from 'react'
import { deliveryClient } from '../client/client'
import { useParams } from 'react-router-dom'

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
}

const Courses = () => {
  const { level } = useParams<{ level: string }>()
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    deliveryClient
      .items()
      .type('levels')
      .depthParameter(2)
      .toPromise()
      .then(async (response) => {
        // Busca el nivel correcto en la respuesta de la API
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
        console.log('response', response)
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
            training_hrs: item.elements.training_hrs?.value
          }
        })
        setCourses(filteredCourses)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [level])

  console.log('courses', courses)

  return (
    <div>
      {courses.map((course, index) => (
        <>
          <div key={index}>{course?.area_name}</div>
          <div key={index}>{course?.topic}</div>
          <div key={index}>{course?.learning_expectatio}</div>
          <div key={index}>{course?.link_suggested}</div>
          <div key={index}>{course?.spoc}</div>
          <div key={index}>{course?.training_hrs}</div>
        </>
      ))}
    </div>
  )
}

export default Courses
