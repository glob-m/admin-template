import CryptoJS from 'crypto-js'

export const encrypt = (word, keyStr, ivStr) => {
  const key = CryptoJS.enc.Latin1.parse(keyStr)
  const iv = CryptoJS.enc.Latin1.parse(ivStr)
  return CryptoJS.AES.encrypt(word, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    adding: CryptoJS.pad.ZeroPadding
  }).toString()
}
export const decrypt = (word, keyStr, ivStr) => {
  const key = CryptoJS.enc.Utf8.parse(keyStr)
  const iv = CryptoJS.enc.Utf8.parse(ivStr)

  const decrypt = CryptoJS.AES.decrypt(word, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  })
  return decrypt.toString(CryptoJS.enc.Utf8)
}
