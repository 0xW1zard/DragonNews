import { redirect } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: 'Dragon News',
  description: 'Get The Latest News on Dragon News - Your Trusted Source for Breaking News, In-Depth Analysis, and Exclusive Stories. Stay Informed with Dragon News Today!',
}
 

const defaultCategoryId = '01';

const HomePage = async () => {

  redirect(`/category/${defaultCategoryId}`)

};

export default HomePage;