import React from 'react';
import CoursesChart from '../DashboardComponent/CoursesChart/CoursesChart';
import PriceChart from '../DashboardComponent/PriceChart';

const DashboardHome = () => {
    return (
        <div>
           
            <CoursesChart/>
            <PriceChart/>
        </div>
    );
};

export default DashboardHome;