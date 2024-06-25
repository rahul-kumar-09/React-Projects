import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Post from "./components/Post";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const renderContent = () => {
    switch (selectedTab) {
      case "Home":
        return <PostList />;
      case "Create Post":
        return <CreatePost />;
      case "Contact Us":
        return <ContactUs />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header />

        {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
        {renderContent()}

        <Footer />
      </div>
    </div>
  );
}

export default App;
