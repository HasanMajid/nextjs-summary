import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
    address: "Some address 5, 12345 Some City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Utrecht-Uithof%2C_from_CambridgeLaan_01.jpg/1024px-Utrecht-Uithof%2C_from_CambridgeLaan_01.jpg",
    address: "Some address 10, 12345 Some City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// will always run on the server side
// will never run on the client side
// this code will run on every request
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  
  // fetch data from an API
  // you need to return an object with props
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // no need to revalidate because this function will run on every request
  };
}


// // nextjs will run this function before rendering the page
// // this prepares all props for the component function
// // this code will never run on the client side
// export function getStaticProps() {
//   // fetch data from an API
//   // you need to return an object with props
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10, // nextjs will regenerate the page every 1 second is new requests come in
//   };
// }

export default HomePage;
