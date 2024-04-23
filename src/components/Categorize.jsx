import React, { useState } from 'react';
import styles from './Categorize.module.css';

const Categorize = ({ addQuestion }) => {
    const [question, setQuestion] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim() === '') return;
        if (categories.length === 0) return;

        addQuestion(question, categories, items);
        setQuestion('');
        setCategories([]);
    };

    const addCategory = (e) => {
        e.preventDefault();
        if (category.trim() === '') return;
        setCategories((prevCategories) => [...prevCategories, category]);
        setCategory('');
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        if (itemName.trim() !== '' && selectedCategory.trim() !== '') {
            setItems((prevItems) => [
                ...prevItems,
                { name: itemName, category: selectedCategory },
            ]);
            setItemName('');
            setSelectedCategory('');
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.frame1}>
                <label className={styles.question}>Question 1</label>
                <input
                    className={styles.input}
                    placeholder="Question"
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </div>

            <div className={styles.frame2}>
                <label className={styles.category}>Categories</label>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button className={styles.button} onClick={addCategory}>
                    Add
                </button>
            </div>

            <div className={styles.frame3}>
                <label className={styles.category}>Items</label>
                <div style={{ display: 'flex', flexDirection: 'row', columnGap: 10 }}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Item name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <button className={styles.button} onClick={handleAddItem}>
                    Add
                </button>
            </div>

            <div className={styles.frame4}>
                <button className={styles.button} type="submit">
                    Add
                </button>
            </div>
        </form>
    );
};

export default Categorize;
