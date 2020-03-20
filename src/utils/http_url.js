
import { get } from './axios'

export const apiUpload = a => get('/upload_oss', a)
