import { redirect } from 'next/navigation';
import React from 'react';


const defaultCategoryId = '01';

const HomePage = async () => {

  redirect(`/category/${defaultCategoryId}`)

};

export default HomePage;