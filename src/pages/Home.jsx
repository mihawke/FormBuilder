import React, { useState } from 'react'
import styles from './Home.module.css'
import { v4 as uuidv4 } from 'uuid';
import Categorize from '../components/Categorize'

const Home = () => {
  const [data, setData] = useState([])

  /* data = {
      id : ,
      question : '',
      categories : [ category 1,category 2],
      items : [
    { name: 'item 1', category: 'category 1' },
    { name: 'item 2', category: 'category 2' },
    { name: 'item 3', category: 'category 1' },
    { name: 'item 4', category: 'category 2' },
    { name: 'item 5', category: 'category 2' },
    { name: 'item 6', category: 'category 1' }
  ]
  }*/

  const addData = (question, categories , items) => {
    setData((currentData => {
      return [
        ...currentData,
        { id: uuidv4(), question, categories  , items}
      ]
    }))
  }

  return (
    <div className={styles.container}>
      <Categorize addQuestion={addData} />
  
      <div style={{ color: 'white' }}>
        {data.map((entry) => (
          <div key={entry.id}>
            <h3>Question: {entry.question}</h3>
            <p>Categories: {entry.categories.join(', ')}</p>
            <ul>
              {entry.items.map((item, index) => (
                <li key={index}>{item.name} - {item.category}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {console.log(data)}
    </div>
  );
}

export default Home