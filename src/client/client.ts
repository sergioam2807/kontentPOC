import { DeliveryClient } from '@kontent-ai/delivery-sdk'

const environmentId =
  typeof import.meta.env.VITE_APP_KONTENT_PROJECT_ID === 'string'
    ? import.meta.env.VITE_APP_KONTENT_PROJECT_ID
    : ''

export const deliveryClient = new DeliveryClient({
  environmentId
})
