/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

function CustomerAddForm() {
    const countries = [
        { code: "US", name: "United States" },
        { code: "CA", name: "Canada" },
        { code: "AU", name: "Australia" },
        { code: "FR", name: "France" },
        { code: "JP", name: "Japan" },
    ];

    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        company_name: "",
        store: "",
        mailbox: "",
        virtual_office: 1,
        autoship: 1,
        country: "US",
    });

    const [formError, setFormError] = useState(null);

    const handleChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        // console.log(event.type)
        console.log(event)
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        setFormError(null);

        try {
            const response = await axios.post("/api/customers", formData);
            console.log("Customer added successfully", response);
        } catch (error) {
            // console.log("Error object:", error);

            // console.log("Error response:", error.response?.data);
            // console.log("Error status:", error.response?.status);
            if (error.response?.data?.message?.includes("already exists")) {
                setFormError({
                    type: "duplicate_username",
                    message:
                        "username already exists in the database, use a unique username",
                });
            } else {
                setFormError({
                    type: "general",
                    message: "Failed to create account.",
                });
            }
            console.log(error);
        }
    };

    const className = {
        selectBox: `border bg-white rounded-sm w-50`,
        inputBox: `border bg-white rounded-sm pl-1 w-50`,
        formRow: `flex items-center`,
        label: `w-32 mr-10`,
    };

    return (
        <div className="bg-[#F6F6F5] p-6 text-sm">
            <h1 className="pb-10 text-4xl text-[#616060]">Add New Recipient</h1>
            <h2 className="pb-5 text-xl font-bold text-[#727272]">
                Step 1 - Fill in Recipient Data
            </h2>
            <form onSubmit={handleSubmit}>
                {formError && (
                    <div className="my-4 rounded bg-red-100 p-2 text-red-700 w-110">
                        {formError.message}
                    </div>
                )}

                <div className="flex w-full flex-col gap-1">
                    <div className={className.formRow}>
                        <label htmlFor="username" className={className.label}>
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className={className.inputBox}
                            required
                            value={formData.username}
                            onChange={handleChange}
                        />{" "}
                        <span className="pl-2 text-red-700">**</span>
                    </div>

                    <div className={className.formRow}>
                        <label htmlFor="first_name" className={className.label}>
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            className={className.inputBox}
                            required
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <span className="pl-2 text-red-700">*</span>
                    </div>

                    <div className={className.formRow}>
                        <label htmlFor="last_name" className={className.label}>
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            className={className.inputBox}
                            required
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        <span className="pl-2 text-red-700">*</span>
                    </div>

                    <div className={className.formRow}>
                        <label
                            htmlFor="company_name"
                            className={className.label}
                        >
                            Company Name:
                        </label>
                        <input
                            type="text"
                            id="company_name"
                            name="company_name"
                            className={className.inputBox}
                            value={formData.company_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={className.formRow}>
                        <label htmlFor="store" className={className.label}>
                            Store:
                        </label>
                        <input
                            type="text"
                            id="store"
                            name="store"
                            className={className.inputBox}
                            value={formData.store}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={className.formRow}>
                        <label htmlFor="mailbox" className={className.label}>
                            Mailbox:
                        </label>
                        <input
                            type="text"
                            id="mailbox"
                            name="mailbox"
                            className={className.inputBox}
                            value={formData.mailbox}
                            onChange={handleChange}
                            pattern="[0-9]{1,7}"
                            maxLength={7}
                            onInput={(e) => Number(e.target.value)}
                        />
                    </div>

                    <div className={className.formRow}>
                        <label
                            htmlFor="virtual_office"
                            className={className.label}
                        >
                            Virtual Office:
                        </label>
                        <select
                            name="virtual_office"
                            id="virtual_office"
                            className={className.selectBox}
                            value={formData.virtual_office}
                            onChange={handleChange}
                        >
                            <option value="1">Y</option>
                            <option value="0">N</option>
                        </select>
                    </div>

                    <div className={className.formRow}>
                        <label htmlFor="autoship" className={className.label}>
                            Auto Ship:
                        </label>
                        <select
                            name="autoship"
                            id="autoship"
                            className={className.selectBox}
                            value={formData.autoship}
                            onChange={handleChange}
                        >
                            <option value="1">Y</option>
                            <option value="0">N</option>
                        </select>
                    </div>

                    <div className={className.formRow}>
                        <label htmlFor="country" className={className.label}>
                            Country:
                        </label>
                        <select
                            name="country"
                            id="country"
                            className={className.selectBox}
                            value={formData.country}
                            onChange={handleChange}
                        >
                            {countries.map((country) => (
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <p className="pt-10 text-xs text-red-500">
                    ** Required and should be unique
                </p>
                <p className="pb-10 text-xs text-red-500">* Required </p>
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-[#727272]">
                        Step 2 - Click the "Add Recipient" Button
                    </h2>
                    <button
                        type="submit"
                        className="w-30 rounded-md bg-[#003283] p-1 text-white transition-transform duration-75 hover:bg-[#0055aa] active:scale-95 active:transform"
                    >
                        Add Recipient
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CustomerAddForm;
