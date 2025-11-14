/**
 * Node modules
 */
import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-black text-white">
			<div className="text-center px-4">
				<h1 className="text-5xl font-bold mb-4">404</h1>
				<p className="text-lg mb-6">Pagina non trovata.</p>
				<Link to="/" className="px-4 py-2 bg-accent text-black rounded font-semibold">
					Torna alla Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;


