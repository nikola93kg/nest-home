import prizemlje1 from '../assets/img/aprtmani_novo/Prizemlje1-1.jpg';
import prizemlje1i2 from '../assets/img/aprtmani_novo/Prizemlje1-2.jpg';
import prizemlje2i2 from '../assets/img/aprtmani_novo/Prizemlje2-2.jpg';
import prizemlje2i3 from '../assets/img/aprtmani_novo/Prizemlje2-3.jpg';
import prizemlje2i4 from '../assets/img/aprtmani_novo/Prizemlje2-4.jpg';
import potkrovlje1 from '../assets/img/aprtmani_novo/Potkrovlje 1 - 1.jpg'
import potkrovlje1i2 from '../assets/img/aprtmani_novo/Potkrovlje 1 - 2.jpg'
import potkrovlje1i3 from '../assets/img/aprtmani_novo/Potkrovlje 1 - 3.jpg'
import potkrovlje1i4 from '../assets/img/aprtmani_novo/Potkrovlje 1 - 4.jpg'
import potkrovlje2i3 from '../assets/img/aprtmani_novo/Potkrovlje 2 i 3 - 1.jpg'
import potkrovlje2i32 from '../assets/img/aprtmani_novo/Potkrovlje 2 i 3 - 2.jpg'
import potkrovlje2i33 from '../assets/img/aprtmani_novo/Potkrovlje 2 i 3 - 3.jpg'
import potkrovlje2i34 from '../assets/img/aprtmani_novo/Potkrovlje 2 i 3 - 4.jpg'

const apartmentsData = [
    {
        id: 1,
        title: 'Prizemlje',
        text: 'Poseduje integralni prostor dnevnog boravka i noćne zone koji su delimično odvojeni zidanim delom. Njihove pozicije u zgradi su od prizemlja 1, prizemlja 2, potkrivlja 1.',
        size: '20.7',
        image: prizemlje1
    },
    {
        id: 2,
        title: 'Prizemlje 2',
        text: 'Poseduje jasno definisane dnevne i noćne zone. Njihove pozije u zgradi su na nivoima prizemlja i prizemlja 2 kao i potrkovlja 1. Svaki od njih poseduje terasu.',
        size: '31.4',
        image: prizemlje1i2
    },
    {
        id: 3,
        title: 'Potkrovlje 1',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou do koga vodi stepenište.',
        size: '40',
        image: prizemlje2i2
    },
    {
        id: 4,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.5',
        image: prizemlje2i3
    },
    {
        id: 5,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.5',
        image: prizemlje2i4
    },

    // POTKROVLJE

    {
        id: 6,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.52',
        image: potkrovlje1
    },
    {
        id: 7,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.52',
        image: potkrovlje1i2
    },
    {
        id: 8,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.52',
        image: potkrovlje1i3
    },
    {
        id: 9,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.52',
        image: potkrovlje1i4
    },
    {
        id: 9,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.52',
        image: potkrovlje2i3
    },
    {
        id: 10,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.52',
        image: potkrovlje2i32
    },
    {
        id: 11,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.52',
        image: potkrovlje2i33
    },
    {
        id: 12,
        title: 'Potkrovlje 2 i 3',
        text: 'Prostire se na dve poslednje etaže, definisan tako da je dnevni boravak sa kuhinjom, kupatilom i ulaznim delom smešten na prvi nivo dok je noćna zona spavanje na drugom nivou u vidu galerije otvorenog prostora do koga vodi stepenište.',
        size: '27.52',
        image: potkrovlje2i34
    },

    
]

export default apartmentsData;