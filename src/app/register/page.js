"use client";

import Button from '@/components/Button';
import CheckBox from '@/components/CheckBox';
import Heading from '@/components/Heading';
import TextInput from '@/components/TextInput';
import React, { useState } from 'react'

export default function Registrationform() {
  const [companyType, setCompanyType] = useState([]);
  const [duration, setDuration] = useState("");
  const [plan, setPlan] = useState("");
  const [formData, setFormData] = useState({
    location: "",
    gst: "",
    companyName: "",
    address: "",
    pinCode: "",
    telephone: "",
    fax: "",
    mobile: "",
    whatsapp: "",
    email: "",
    website: "",
    contactPerson: "",
    contactTel: "",
    contactFax: "",
    contactMobile: "",
    contactWhatsapp: "",
    contactEmail: "",
    nature: "",
    category: "",
    subCategory: "",
  });

  const handleInputChange = (e) => {
    const {name,value}=e.target;
    console.log({name,value});
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log({
  ...formData,
  companyType,
  plan,
  duration
})
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          companyType,
          plan,
          duration
        }),
      });
      
      const result = await response.json();
  
      if (!response.ok) {
        alert(`❌ Error: ${result.message}`);
        return;
      }
  
      alert("✅ Registration successful. Email sent!");
      window.location.reload();
   
      setCompanyType([]);
      setPlan("");
      setDuration("");
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong. Please try again later.");
    }
  };
  

  const handleCheckboxChange = (e, setState, current) => {
    const { value, checked } = e.target;
    setState(checked
      ? [...current, value]
      : current.filter(item => item !== value));
  };

  return (
    
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-8 p-6 shadow rounded text-green-900 bg-white">
      <h1 className='text-center text-orange-500  text-3xl font-semibold font-serif m-4'>Registration Form</h1>

      {/* Location & Gst */}
      <div className="grid grid-cols-2 gap-4 focus-ring-2 focus-ring-orange-300">
        <TextInput label="Location" name="location" value={formData.location} onChange={handleInputChange} required  />
        <TextInput label="GST No." name="gst" value={formData.gst} onChange={handleInputChange}  />
      </div>

    <Heading title="Plan Information" />
    <CheckBox label="Type of Company" options={["Proprietorship", "Partnership", "LLP", "Public LTD", "HUF", "Other"]} selected={companyType} onChange={(e) => handleCheckboxChange(e, setCompanyType, companyType)} />
      <div className="mb-4">
        <label className="block font-semibold text-green-900 mb-1">Subscription Plan</label>
        {["Silver (₨ : 100) ", "Gold (₨ : 500)", "Platinum (₨ : 1000)"].map(p => (
          <label key={p} className="mr-4 text-sm">
            <input type="radio" name="plan" value={p} checked={plan === p} onChange={(e) => setPlan(e.target.value)} required />
            <span className="ml-1">{p}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="block   font-semibold text-green-900 mb-1">Plan Duration</label>
        {[1, 2, 3, 4, 5].map(y => (
          <label key={y} className="mr-4 text-sm">
            <input type="radio" name="duration" value={`${y} Year`} checked={duration === `${y} Year`} onChange={(e) => setDuration(e.target.value)} required />
            <span className="ml-1">{y} Year</span>
          </label>
        ))}
      </div>

      {/* Company Details */}
      <Heading title="Company Details" />
      <TextInput label="Company Name" name="companyName" value={formData.companyName} onChange={handleInputChange} required color="orange" />
      <TextInput label="Address" name="address" value={formData.address} onChange={handleInputChange} required color="orange" />
      <TextInput label="Pin Code" name="pinCode" type='number' value={formData.pinCode} onChange={handleInputChange} color="orange" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <TextInput label="Telephone No." type='number' name="telephone" value={formData.telephone} onChange={handleInputChange} color="orange"/>
        <TextInput label="FAX No." name="fax" type='number' value={formData.fax} onChange={handleInputChange} color="orange"/>
        <TextInput label="Mobile No." type='number' name="mobile" value={formData.mobile} onChange={handleInputChange} required color="orange"/>
    
        <TextInput label="WhatsApp No." type='number' name="whatsapp" value={formData.whatsapp} onChange={handleInputChange}  color="orange" />
        <TextInput label="Email" name="email" type='email' value={formData.email} onChange={handleInputChange}  color="orange" />
        <TextInput label="Website" name="website" value={formData.website} onChange={handleInputChange}  color="orange"/>
      </div>

     {/* Contact Details */}
      <Heading title='Contact Details'/>
        <TextInput label="Contact Person" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} required color="blue"/>

      <div className="grid  grid-cols-2 md:grid-cols-3 gap-4">
        <TextInput label="Telephone No." type='number' name="contactTel" value={formData.contactTel} onChange={handleInputChange} color="blue" />
        <TextInput label="FAX No." name="contactFax" type='number' value={formData.contactFax} onChange={handleInputChange} color="blue"/>
        <TextInput label="Mobile No." type='number' name="contactMobile" value={formData.contactMobile} onChange={handleInputChange} required color="blue" />
        <TextInput label="WhatsApp No." type='number' name="contactWhatsapp" value={formData.contactWhatsapp} onChange={handleInputChange} required color="blue" />
        <TextInput label="Email" name="contactEmail" type='email' value={formData.email} onChange={handleInputChange}  color="blue" />
      </div>

     {/* Nature of Bussiness */}
      <Heading title="Nature of Business" />
      <TextInput label="Nature of Business" name="nature" value={formData.nature} onChange={handleInputChange}  color="green"/>

      {/* category & subcategory */}
      <div className="grid grid-cols-2 gap-4">
        <TextInput label="Category" name="category" value={formData.category} onChange={handleInputChange}  color="green" />
        <TextInput label="Sub Category" name="subCategory" value={formData.subCategory} onChange={handleInputChange}  color="green" />
      </div>

        {/* <TextInput label="Others (Specify)" name="other" value={formData.other} onChange={handleInputChange} required color="green" /> */}

          {/* Submit btn */}
        <div className="flex justify-center items-center">
          <Button text="Submit" type="submit" className="mt-4">
            Submit
          </Button>
        </div>

    </form>
    );
}

