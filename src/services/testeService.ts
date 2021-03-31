import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BASE_URL
})

class TesteService {

  async get() {
    return new Promise((resolve, reject) =>{
      api.get('/').then(res =>{
        resolve(res.data)
      }).catch(error =>{
        // console.log(error)
        reject(error)
      })
    })

    // await api.post('/', {
    //   foodItemIds: [142, 788],
    //   address: '1601 Market St, Phiadelphia, PA 19103',
    //   paymentMethod: 'cash'
    // })
  }
}

export default TesteService;