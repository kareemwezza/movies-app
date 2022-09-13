const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validateEmail = (email: string): Boolean => {
  return validRegex.test(email.trim())
}

export const confirmPassword = (password: string, confirmedPassword: string): boolean => {
  return password === confirmedPassword
}
