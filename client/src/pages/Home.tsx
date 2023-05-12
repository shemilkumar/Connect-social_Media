import Layout from "../components/Layout";
import AllPosts from "../components/AllPosts";
import Navbar from "../components/Navbar";
import WritePost from "../components/WritePost";
import Container from "../components/Container";

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
