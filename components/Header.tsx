import React from 'react';
import { globals } from '../globals';

export const Header: React.FC = () => (
    <div className="header">
        <a href="/">{globals.siteName}</a>
    </div>
);




