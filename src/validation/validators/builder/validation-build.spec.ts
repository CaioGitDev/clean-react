import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'
import { ValidationBuilder } from './validation-builder'

describe('ValidationBuilder', () => {
  test('should return requiredfieldvalidation', () => {
    const validations = ValidationBuilder.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('should return requiredfieldvalidation', () => {
    const validations = ValidationBuilder.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  test('should return requiredfieldvalidation', () => {
    const validations = ValidationBuilder.field('any_field').min(5).build()
    expect(validations).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
