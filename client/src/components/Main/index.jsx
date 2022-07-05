import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
// const { userInfo } = userLogin;


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (

		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Book Publication</h1>
					<ul className='nav-item'>
						<Link className='nav-link' to='/books'>
						Books
						</Link>
					</ul>
					<ul className='nav-item'>
						<Link className='nav-link' to='/addbook'>
						Add book
						</Link>
					</ul>

					<ul className='nav-item'>
						<Link className='nav-link' to='/signup'>
						Register
						</Link>
					</ul>

					<ul className='nav-item'>
						<Link className='nav-link' to='/login'>
						Login
						</Link>
					</ul>
					
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</nav>
			 
		</div>
	);
};

export default Main;
