import { DeliveryClient } from '@kontent-ai/delivery-sdk'

const environmentId =
  typeof import.meta.env.VITE_APP_KONTENT_PROJECT_ID === 'string'
    ? import.meta.env.VITE_APP_KONTENT_PROJECT_ID
    : ''

const previewApiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYTZjNDFhZWNmNDI0NWU4OTU2NGUzNThlZmU1NWI5YiIsImlhdCI6MTcxNDQyMTA4OSwibmJmIjoxNzE0NDIxMDg5LCJleHAiOjE3NDU5NTcwNDAsInZlciI6IjIuMC4wIiwic2NvcGVfaWQiOiI0OGRhODU4NzJhYzc0YzQzYTY2Yzk4ZDAxZjFiYWU5ZiIsInByb2plY3RfY29udGFpbmVyX2lkIjoiOTE3MjEwNDY2OGE4MDBkZGU3NTgzNTJhMmU3NWU5MWQiLCJhdWQiOiJkZWxpdmVyLmtvbnRlbnQuYWkifQ.Qr5IZ07Vzax4H7xvigdcVvR8p29Bh2e9Cd_obEQv8mk'

export const deliveryClient = new DeliveryClient({
  environmentId,
  defaultQueryConfig: {
    usePreviewMode: true
  },
  previewApiKey
})
