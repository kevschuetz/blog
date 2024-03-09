import React from 'react';
import { globals } from '../globals';

const categories = [
    { id: 1, name: 'Design Principles' },
    { id: 2, name: 'Design Patterns' },
    { id: 3, name: 'Productivity' },
    // Add more categories as needed
];

export const Header: React.FC = () => (
    <div className="header">
        <a href="/">{globals.siteName}</a>

        <div className="dropdown">
            <button className="dropbtn">Series</button>
            <div className="dropdown-content">
                {categories.map((category) => (
                    <a key={category.id} href={`/category/${category.id}`}>
                        {category.name}
                    </a>
                ))}
            </div>
        </div>
    </div>
);




