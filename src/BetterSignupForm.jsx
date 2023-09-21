import { useState } from "react";
function BetterSignupForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
    });

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) => {
            return {
                ...currData,
                [changedField]: newValue,
            };
        });
    };

    const handleSubmit = () => {
        console.log(formData);
    };
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input 
                type="text"
                placeholder="first name"
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                id="firstname" 
            />
            <label htmlFor="lastname">First Name</label>
            <input 
                type="text"
                placeholder="last name"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                id="lastname" 
            />
            <label htmlFor="password">First Name</label>
            <input 
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                id="password" 
            />
            <button onClick={handleSubmit}></button>
        </div>
    );;
}

export default BetterSignupForm