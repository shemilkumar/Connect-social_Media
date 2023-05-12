import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import WritePost from "../components/WritePost";
import AllPosts from "../components/AllPosts";

const Home = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Container>
          <WritePost />
          <AllPosts />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
