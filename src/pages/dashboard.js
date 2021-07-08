// getServerSideProps
import fetch from "isomorphic-unfetch";

const Dashboard = ({ me }) => {
  return (
    <div>
      <h1>{!me ? "Loading..." : `${me.name}'s dashboard`}</h1>
    </div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  let user;
  // call api route
  const response = await fetch(`http://localhost:3000/api/users/1`);

  if (!response.ok) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
  } else {
    const data = await response.json();

    if (data) {
      user = data;
    } else {
      res.writeHead(302, {
        Location: "/",
      });
      res.end();
    }
  }

  // if (!req.headers.cookie) {
  //   res.writeHead(302, {
  //     Location: "/",
  //   });
  //   res.end();
  // } else {
  //   // Query user info from database
  //   return {
  //     props: {
  //       me: "Your personal dashboard",
  //     },
  //   };
  // }
  return {
    props: { me: user },
  };
};

export default Dashboard;
