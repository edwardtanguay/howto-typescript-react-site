import { useEffect, useState } from 'react';
import axios from 'axios';
import { IBook } from './data/interfaces';
import { getBooks } from './data/bookModel'; 
import './App.scss';

const url = 'https://gutendex.com/books/?search=paris';

function App() {
	const [books, setBooks] = useState<IBook[]>([]);






	useEffect(() => {
		(async () => {
			const rawBooks = (await axios.get(url)).data.results;
			const _books: IBook[] = getBooks(rawBooks);
			setBooks(_books);
		})();
	}, []);

	return (
		<div className="App">
			{books.length === 0 ? (
				<div>Loading...</div>
			) : (
				<>
					<h2>There are {books.length} books:</h2>
					<ul>
						{books.map((book, index) => {
							return (
								<li key={index}>{book.title} by {book.author}</li>
							) 
						})}
					</ul>
				</>
			)}
		</div>
	);
}

export default App;
