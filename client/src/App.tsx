import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Post />
        <Post />
        <Post />
      </Layout>
    </>
  );
}

export default App;
