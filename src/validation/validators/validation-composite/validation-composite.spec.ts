import { ValidationComposite } from './validation-composite'
import { FieldValidationSpy } from '../test/mock-field-validation'

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const fieldValidationSpy = new FieldValidationSpy('any_field')
    fieldValidationSpy.error = new Error('any_first_message')
    const fieldValidationSpy2 = new FieldValidationSpy('any_field')
    fieldValidationSpy2.error = new Error('any_message')
    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('any_first_message')
  })
})