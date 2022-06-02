import React, { useState } from "react";

type Props = {
  savePuppy: (e: React.FormEvent, formData: IPuppy | any) => void;
};

const AddTodo: React.FC<Props> = ({ savePuppy }) => {
  const [formData, setFormData] = useState<IPuppy | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  
  // console.log("formData", formData);
  return (
    <form className="Form-addPuppy" onSubmit={(e) => savePuppy(e, formData)}>
      <div className="Form-addPuppy__inputs">
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input onChange={handleForm} type="text" id="breed" />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input onChange={handleForm} type="text" id="dob" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>
        Add Puppy
      </button>
    </form>
  );
};

export default AddTodo;
