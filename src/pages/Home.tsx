import { AvatarsList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/avatar.svg',
      name: 'Raquel Batista',
      subtitle: currencyConverter(145324.55),
    },
    {
      avatar: '/avatar.svg',
      name: 'Walter Luiz',
      subtitle: currencyConverter(144231.66),
    },
    {
      avatar: '/avatar.svg',
      name: 'Steve Jobs',
      subtitle: currencyConverter(12304.89),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent> CARD </CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
