import axios from 'axios'
import * as faker from 'faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mokedAxios = axios as jest.Mocked<typeof axios>
  mokedAxios.post.mockResolvedValue({
    data: faker.random.objectElement(),
    status: faker.random.number()
  })
  return mokedAxios
}
