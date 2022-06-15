export const usernameValidator = (value: string) => {
  if (value.length === 0) return false
  if (value !== 'Test') return false
  return true
}

export const passwordValidator = (value: string) => {
  if (value.length === 0 || value.length < 8) return false
  if (value !== 'Test1234!') return false
  return true
}