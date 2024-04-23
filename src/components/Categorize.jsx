import React, { useState } from 'react';
import styles from './Categorize.module.css';
import { FaRegTrashAlt } from "react-icons/fa";

const Categorize = ({ addData }) => {
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

        addData(question, categories, items);
        setQuestion('');
        setCategories([]);
    };

    const addCategory = (e) => {
        e.preventDefault();
        if (category.trim() === '') return;
        setCategories((prevCategories) => [...prevCategories, category]);
        setCategory('');
    };

    const deleteCategory = (categoryToDelete, e) => {
        e.preventDefault()
        setCategories((prevCategories) =>
            prevCategories.filter((category) => category !== categoryToDelete)
        );
    };


    const deleteItem = (itemToDelete, e) => {
        e.preventDefault()
        setItems((prevItems) =>
            prevItems.filter((item) => item !== itemToDelete)
        )
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
                <div style={{ display: 'flex', flexDirection: 'row', columnGap: 10, alignItems: 'center' }}>
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


                {categories.map((category, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'row', columnGap: 10, alignItems: 'center' }}>
                        <p className={styles.text}>{category}</p>
                        <button className={styles.trash} onClick={(e) => deleteCategory(category, e)}><FaRegTrashAlt /></button>
                    </div>
                ))}
            </div>

            <div className={styles.frame3}>
                <label className={styles.category}>Items</label>
                <div style={{ display: 'flex', flexDirection: 'row', columnGap: 10, alignItems: 'center' }}>
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
                            className={styles.select}
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



                {items.map((item, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'row', columnGap: 10, alignItems: 'center' }}>
                        <p>{index}</p>
                        <p className={styles.text}>{item.name}</p>
                        <p>:</p>
                        <p className={styles.text}>{item.category}</p>
                        <button className={styles.trash} onClick={(e) => deleteItem(item, e)}><FaRegTrashAlt /></button>
                    </div>
                ))}
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
