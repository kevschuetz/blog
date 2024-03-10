import React from 'react';
import { globals } from '../globals';

export const Header: React.FC = () => (
    <div className="header">
        <a href="/">{globals.siteName}</a>

        <div className="dropdown">
            <button className="dropbtn">Series</button>
            <div className="dropdown-content">
                {globals.categories.map((category) => (
                    <a key={category.id} href={`/blog/category/${category.id}`}>
                        {category.name}
                    </a>
                ))}
            </div>
        </div>
    </div>
);




