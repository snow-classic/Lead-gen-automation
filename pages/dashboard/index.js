import withAuth from "../../HOC/withAuth";
import Layout from "../../components/Layout/layout";

function Dashboard() {
  return (
    <>
      <Layout>Hello this is Dashboard</Layout>
    </>
  );
}

export default withAuth(Dashboard);
