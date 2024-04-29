import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import horror from "./data/books/horror.json";
import history from "./data/books/history.json";
import fantasy from "./data/books/fantasy.json";
import romance from "./data/books/romance.json";
import CommentArea from "./components/CommentArea";

function App() {
  return (
    <div className="App">
      <Welcome />
      <MyNav />
      <AllTheBooks />
      <BookList books={fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;
