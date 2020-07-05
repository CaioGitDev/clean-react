import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import * as faker from 'faker'
import { HttpPostParams } from '../../../data/protocols/http'

jest.mock('axios')
const mokedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mokedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
