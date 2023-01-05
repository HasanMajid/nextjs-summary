import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Utrecht-Uithof%2C_from_CambridgeLaan_01.jpg/1024px-Utrecht-Uithof%2C_from_CambridgeLaan_01.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },

]

function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage