import { HttpPostParams } from '../protocols/http'
import * as faker from 'faker'
export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
