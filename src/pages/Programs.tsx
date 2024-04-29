import { useState, useEffect } from 'react'
import { deliveryClient } from '../client/client'
import { type IContentItemElements } from '@kontent-ai/delivery-sdk'

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

  console.log(programs)

  return <div>hELLO</div>
}

export default Programs
