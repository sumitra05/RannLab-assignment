import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
import Books from './components/Books/Books';
import AddBook from './components/Books/AddBook';
import BookDetail from './components/Books/BookDetail';

function App() {
	const user = localStorage.getItem("token");

	return (

		<Routes>
			{/* {user && <Route path="/" exact element={<Main />} />} */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			<Route path="/books" exact element={<Books />} />
			<Route path="/addbook" exact element={<AddBook />} />
			<Route path='/book/:id' exact element={<BookDetail/>} />
        </Routes>
	);
}

export default App;
