import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import List from "./List";
import BookList from "./BookList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/booklist" element={<BookList />} />
      </Routes>
    </div>
  );
};

export default App;
