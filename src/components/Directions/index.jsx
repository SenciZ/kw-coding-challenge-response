import React from 'react';
import './styles.scss';

export const Directions = () => {
  return (
    <div className='directions section'>
      <h2>Directions</h2>
      <div className='content-wrapper'>
        <img className='example-image' src='../../../example.png' alt='example' />
        <div className='directions-text'>
          <ol>
            <li>In this exercise, you will be recreating the table in the image. Place all of your code inside of the Lower Impact Purchases component.</li>
            <li>In the data.js file in the LowerImpactPurchases folder, you should see all the data you need to create the 30 days and last 12 months tabs.</li>
            <li>The subtext below the header should dynamically display the number of rows in each table.</li>
            <li>Clicking on a row should take the user to the website for the company.</li>
            <li>Clicking on a tab should take the user between the two views.</li>
            <li>Amounts should be rounded to two decimal places like a dollar amount.</li>
            <li>The emoji should represent the rating of the company, negative uses the emoji-negative svg, neutral uses the emoji-neutral svg</li>
            <li>You do not need to worry about using the font families seen in the image, but please try to style the component in a similar manner.</li>
            <li>If you have any questions please reach out to sara@theimpactkarma.com</li>
          </ol>
        </div>
      </div>
    </div>
  )
}