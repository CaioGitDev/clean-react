import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'
import { ValidationBuilder } from './validation-builder'
import * as faker from 'faker'

describe('ValidationBuilder', () => {
  test('should return requiredfieldvalidation', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validations = ValidationBuilder.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validations = ValidationBuilder.field(field).required().min(length).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field)
    ])
  })
})
