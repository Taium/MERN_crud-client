import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Data from './Data';
import showCat from './showCat';

const Category = () => {
    const [category, setCategory] = useState([])
    const [addCategory, setAddCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/readdata')
            .then(res => res.json())
            .then(data => {

                setCategory(data.data)

            })
        fetch('http://localhost:5000/readadddata')
            .then(res => res.json())
            .then(data => {

                setAddCategory(data.data)

            })
    }, [])
    const add = (name) => {
        const formData = new FormData();

        formData.append('category', name)

        fetch(`http://localhost:5000/addCategory`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:5000/readadddata')
                    .then(res => res.json())
                    .then(data => {

                        setAddCategory(data.data)

                    })
            })
    }
    const deleteData = (id) => {
        const formData = new FormData();

        formData.append('id', id)

        fetch(`http://localhost:5000/datadelete`, {
            method: 'DELETE',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:5000/readadddata')
                    .then(res => res.json())
                    .then(data => {

                        setAddCategory(data.data)

                    })
            })
    }
    return (
        <>
            <div class="row">
                <div class="col-md-5">
                    {
                        category &&
                        category.length > 0 &&
                        category.map(category => (<Data add={add} cat={category}></Data>))
                    }
                </div>
                <div class="col-md-5">
                    {
                        addCategory &&
                        addCategory.length > 0 &&
                        addCategory.map(category =>
                        (
                            <>
                                <h1>{category.categoryname}</h1>
                                <button onClick={() => deleteData(category.id)}>Delete</button>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Category;