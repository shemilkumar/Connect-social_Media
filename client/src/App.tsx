import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import AllPosts from "./components/AllPosts";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <AllPosts />
        <Post />
        <Post />
        <Post />
      </Layout>
    </>
  );
}

export default App;
