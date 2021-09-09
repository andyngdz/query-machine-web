import { IDogResponse } from 'types'
import { useAxiosQueryMachine } from 'query-machine'
import { useEffectOnce } from 'react-use'

export const Home = () => {
  const [{ onGet }] = useAxiosQueryMachine<IDogResponse>({
    baseURL: 'https://dog.ceo/api'
  })

  useEffectOnce(() => {
    onGet('/breeds/image/random')
  })

  return <div></div>
}
