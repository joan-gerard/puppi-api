// import React from 'react'

// const PuppyItem = () => {
//   return (
//     <div>PuppyItem</div>
//   )
// }

// export default PuppyItem

import React, { useState } from "react";
import UpdateForm from "./UpdateForm";

type Props = PuppyProps & {
  updatePuppy: (e: React.FormEvent, formData: IPuppy | any) => void;
  deletePuppy: (_id: string) => void;
  puppy: IPuppy;
};

const Todo: React.FC<Props> = ({ puppy, deletePuppy, updatePuppy }) => {
  const [isUpdate, setIsUpdate] = useState<Boolean>(false);

  const showUpdateForm = () => {
    setIsUpdate(true);
  };

  // console.log('the puppy', puppy)

  return (
    <div className="Card">
      <div className="Card--text">
        <h2>{puppy.name}</h2>
        <p>{puppy.breed}</p>
        <p>{puppy.dob}</p>
      </div>
      <div className="Card--button">
        {isUpdate ? null : (
          <button
            onClick={() => showUpdateForm()}
            className="Card--button__update"
          >
            Update
          </button>
        )}
        <button
          onClick={() => deletePuppy(puppy._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
      {isUpdate ? (
        <UpdateForm puppyID={puppy._id} updatePuppy={updatePuppy} />
      ) : null}
    </div>
  );
};

export default Todo;
