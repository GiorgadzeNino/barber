import ajax from './ajax'

export const getAllProducts = () => ajax.get('data.json')