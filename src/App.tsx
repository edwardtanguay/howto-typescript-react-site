import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
	const [count, setCount] = useState(0);

	enum PersonStatus {
		Customer,
		Employee,
		Unknown,
	}

	interface IPerson {
		firstName: string;
		lastName: string;
		age: number;
		isMember: boolean;
		scores: number[];
		accessGroups: string[];
		status: PersonStatus;
	}

	const person: IPerson = {
		firstName: 'Harald',
		lastName: 'Deckner',
		age: 34,
		isMember: true,
		scores: [95, 80, 85],
		accessGroups: ['admins'],
		status: PersonStatus.Employee,
	};

	return (
		<div className="App">
			<p>
				The person {person.firstName} {person.lastName} has the
				following scores {person.scores.join(', ')}.
			</p>
			{person.status === PersonStatus.Employee && (
				<>
					<p>Status is: {person.status}</p>
					<p>Status is: {PersonStatus[person.status]}</p>
				</>
			)}
		</div>
	);
}

export default App;
