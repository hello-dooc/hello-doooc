export const reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/

export const  reg_phone = /^1(3[0-9]|4[01456879]|5[0-3,5-9]|6[2567]|7[0-8]|8[0-9]|9[0-3,5-9])\d{8}$/

export function validate_password(value){
  return reg_password.test(value)
}

export function validate_phone(value){
  return reg_phone.test(value)
}

export const  reg_email = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/

export function validate_email(value){
  return reg_email.test(value)
}