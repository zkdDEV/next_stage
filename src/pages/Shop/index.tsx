import Categories from '../../components/Categories'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import bike1 from '../../assets/images/bike1_1.jpg'
import bike2 from '../../assets/images/bike1_2.jpg'

type Bikes = {
  id: number
  brand: string
  price: number
  image1: string
  image2: string
  name: string
  description: string
  stars: number
}

export type BikeModels = {
  id: number
  model: string
  bikes: Bikes[]
}

const mock: BikeModels[] = [
  {
    id: 1,
    model: 'E-MTB',
    bikes: [
      {
        id: 1,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4
      },
      {
        id: 2,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4.5
      },
      {
        id: 3,
        brand: 'Sense',
        price: 54.999,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 5
      }
    ]
  },
  {
    id: 2,
    model: 'MTB',
    bikes: [
      {
        id: 1,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4
      },
      {
        id: 2,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4.5
      },
      {
        id: 3,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 5
      }
    ]
  },
  {
    id: 3,
    model: 'Speed',
    bikes: [
      {
        id: 1,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4
      },
      {
        id: 2,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4.5
      },
      {
        id: 3,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 5
      }
    ]
  },
  {
    id: 4,
    model: 'Urbana',
    bikes: [
      {
        id: 1,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4
      },
      {
        id: 2,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4.5
      },
      {
        id: 3,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 5
      }
    ]
  },
  {
    id: 5,
    model: 'BMX',
    bikes: [
      {
        id: 1,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4
      },
      {
        id: 2,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 4.5
      },
      {
        id: 3,
        brand: 'Sense',
        price: 54.99,
        image1: bike1,
        image2: bike2,
        name: 'Bicicleta Exalt E-Trail Evo',
        description:
          'A Exalt e-Trail Evo, uma bicicleta assistida concebida para se assemelhar ao máximo ao comportamento de uma MTB convencional, entrega a possibilidade de pedalar mais trilhas e explorar novos e variados terrenos.',
        stars: 5
      }
    ]
  }
]

const Shop = () => {
  return (
    <>
      <Header inStore="yes" />
      <Categories categories={mock} />
      <ProductsList items={mock} />
    </>
  )
}

export default Shop
