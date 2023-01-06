import MeetupDetail from "../../components/meetups/MeetupDetail";

function Meetup() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"
      title="First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false, // if true, nextjs will try to generate the page on the fly if the page is not found
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId)
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
        id: meetupId,
        title: "First Meetup",
        address: "Some address 5, 12345 Some City",
        description:
          "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
      },
    },
  };
}

export default Meetup;
