import withAuth from "../../HOC/withAuth";
import Layout from "../../components/Layout/layout";
import CampaignComponent from "../../components/campaign";
function campaign() {
  return (
    <Layout>
      <CampaignComponent />
    </Layout>
  );
}

export default withAuth(campaign);
