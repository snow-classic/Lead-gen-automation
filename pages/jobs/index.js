import withAuth from "../../HOC/withAuth";
import Layout from "../../components/Layout/layout";
import JobsComponent from "../../components/jobs";
import React, { useState, useEffect } from "react";
import { getCampaignNames } from "../../actions/asyncActions";
function Jobs() {
  useEffect(() => {
    // Update the document title using the browser API
    getCampaignNames();
  }, []);

  return (
    <>
      <Layout>
        <JobsComponent />
      </Layout>
    </>
  );
}

export default withAuth(Jobs);
