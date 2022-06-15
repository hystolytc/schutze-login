import { usernameValidator, passwordValidator } from './index'

describe('username', () => {
  test('username consist empty character tobe false', () => {
    expect(usernameValidator('')).toBeFalsy()
  })
  test('username is incorrect tobe false', () => {
    expect(usernameValidator('Testusername')).toBeFalsy()
  })
  test('username is correct tobe true', () => {
    expect(usernameValidator('Test')).toBeTruthy()
  })
})

describe('password', () => {
  test('password consist empty string tobe false', () => {
    expect(passwordValidator('')).toBeFalsy()
  })
  test('password consist less than 8 character tobe false', () => {
    expect(passwordValidator('tes23')).toBeFalsy()
  })
  test('password is incorrect tobe false', () => {
    expect(passwordValidator('tes123456')).toBeFalsy()
  })
  test('password is correct tobe true', () => {
    expect(passwordValidator('Test1234!')).toBeTruthy()
  })
})