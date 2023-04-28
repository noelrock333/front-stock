import React, { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        quantity: 0,
        price: 0,
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFormData({
            [name]: value,
            ...formData
        });
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Quantity</label>
                <input type="text" name="quantity"/>
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="text" name="price"/>
            </div>
        </form>
    );
}