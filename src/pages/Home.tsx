import { AvatarsList, CardComponent, CustomTable, Header } from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Raquel Bastis</span>,
        <span>raquel@teste.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Walter Luiz</span>,
        <span>walter@teste.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Steve Jobs</span>,
        <span>stevejobs@teste.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent> CARD </CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
