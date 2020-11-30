import service from '@utils/request'

export function list(data) {
  console.log(data)
  return service.get('/list')
}