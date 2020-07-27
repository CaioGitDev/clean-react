import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/erros'
import * as faker from 'faker'

const makeSut = (): EmailValidation => new EmailValidation(faker.database.column())
describe('RequiredFieldValidation', () => {
  test('should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.words())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return false if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
