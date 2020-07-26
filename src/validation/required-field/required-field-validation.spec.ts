import { RequiredFieldValidation } from './required-field-validation'
import { RequiredFieldError } from '@/validation/erros'
import * as faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('should return false if field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.words())
    expect(error).toBeFalsy()
  })
})
