import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="bg-white flex flex-1  ">
        <div className="bg-white flex-1 flex-col m-2 rounded">
          <div className="flex-1 text-center">
            <span class="material-icons text-9xl">&#xE87C;</span>
            <h1 className="font-thin text-2xl"> An about me page.</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
