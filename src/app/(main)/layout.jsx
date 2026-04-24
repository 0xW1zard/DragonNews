import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;