import React, { useState } from "react";

type Props = {
  updatePuppy: (e: React.FormEvent, formData: IPuppy | any) => void;
  puppyID: string;
};

const UpdateForm: React.FC<Props> = ({ updatePuppy, puppyID }) => {

    const [updateFormData, setupdateFormData] = useState<IPuppy | {}>();

    const handleUpdateForm = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log('e.currentTarget.id', e.currentTarget.id)
        console.log('e.currentTarget.value', e.currentTarget.value)
        setupdateFormData({
        ...updateFormData,
        // OMG that was annoying
        _id: puppyID,
        [e.currentTarget.id]: e.currentTarget.value,
        // [e.currentTarget.id]: e.currentTarget.value,
      });
    };

    console.log('the puppy id', puppyID)
    console.log('updateFormData', updateFormData)
  
  return (
    <form className="Form-updatePuppy" onSubmit={(e) => updatePuppy(e, updateFormData)}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleUpdateForm} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input onChange={handleUpdateForm} type="text" id="breed" />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input onChange={handleUpdateForm} type="text" id="dob" />
        </div>
      </div>
      <button>Update Puppy</button>
    </form>
  );
};

export default UpdateForm;
