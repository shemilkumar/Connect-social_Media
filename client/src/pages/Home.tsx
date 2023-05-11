import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import AllPosts from "../components/AllPosts";

const Home = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <AllPosts />
      </Layout>
    </>
  );
};

export default Home;
