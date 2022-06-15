export const getLocalStorage = {
  userToken: (): string => {
    let token = localStorage.getItem('user_token')
    if (token) return JSON.parse(token) 
    return ''
  }
}

export const setLocalStorage = {
  userToken: (token: string) => localStorage.setItem('user_token', JSON.stringify(token)) 
}

export const removeLocalStorage = {
  userToken: () => localStorage.removeItem('user_token')
}