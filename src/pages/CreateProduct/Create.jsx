import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

const Create = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const handleCreatePro = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      Create
      <form onClick={handleCreatePro} action="">
        <input
          value={formData.title}
          onChange={handleChange}
          type="text"
          name="title"
        />
        <input
          value={formData.price}
          onChange={handleChange}
          type="number"
          name="price"
        />
        <input
          value={formData.oldPrice}
          onChange={handleChange}
          type="number"
          name="oldPrice"
        />
        <input
          value={formData.category}
          onChange={handleChange}
          type="text"
          name="category"
        />
        <input
          value={formData.units}
          onChange={handleChange}
          type="text"
          name="units"
        />
        <textarea
          onChange={handleChange}
          value={formData.description}
          name="description"
          id=""
        ></textarea>
        <textarea
          onChange={handleChange}
          value={formData.info}
          name="info"
          id=""
        ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
