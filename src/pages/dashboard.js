// getServerSideProps

const Dashboard = ({ me }) => {
  return (
    <div>
      <h1>Your Dashboard</h1>
    </div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  console.log("Header -->", req.headers);

  if (!req.headers.cookie) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
  } else {
    // Query user info from database
    return {
      props: {
        me: "Your personal dashboard",
      },
    };
  }
};

export default Dashboard;
