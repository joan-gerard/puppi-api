import React, { useEffect, useState } from "react";
import PuppyItem from "./components/PuppyItem";
import AddPuppy from "./components/AddPuppy";
import { getPuppies, addPuppy, deletePuppy, updatePuppy } from "./API";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { getAllPuppies, deletePuppyReducer } from "./features/Puppies";

const App = () => {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  const puppyList = useSelector((state: RootState) => state.puppies.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPuppies();
  }, []);

  
  const fetchPuppies = (): any => {
    getPuppies()
      // .then((data) => console.log("data", data.data.puppies))
      .then(({ data: { puppies } }: IPuppy[] | any) => {
        console.log("data", puppies);
        dispatch(getAllPuppies(puppies));
      })
      // .then(({ data: { puppies } }: IPuppy[] | any) => setPuppies(puppies))
      .catch((err: Error) => console.log(err));
  };

  const handleSavePuppy = (e: React.FormEvent, formData: IPuppy): void => {
    e.preventDefault();

    addPuppy(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Puppy not saved");
        }
        setPuppies(data.puppies);
      })
      .catch((err) => console.log(err));
  };

  const handleDeletePuppy = (_id: string): void => {
    deletePuppy(_id)
      .then(({ status, data }) => {
        console.log('handleDeletePuppy', data)
        // debugger;
        if (status !== 200) {
          throw new Error("Error! Puppy not deleted");
        }

        dispatch(deletePuppyReducer(data.puppies));
      })
      // .then(() => fetchPuppies())
      .catch((err) => console.log(err));
    // deletePuppy(_id)
    //   .then(({ status, data }) => {
    //     if (status !== 200) {
    //       throw new Error("Error! Puppy not deleted");
    //     }

    //     setPuppies(data.puppies);
    //   })
    //   .catch((err) => console.log(err));
  };

  const handleUpdatePuppy = (e: React.FormEvent, formData: IPuppy): void => {
    // updatePuppy(formData)
    //   .then(({ status, data }) => {
    //     if (status !== 200) {
    //       throw new Error("Error! Puppy not updated");
    //     }
    //     setPuppies(data.puppies);
    //   })
    //   .catch((err) => console.log(err));
  };

  console.log("puppyList", puppyList);
  // console.log("puppies", puppies);
  return (
    <main className="App">
      <h1>My Puppies</h1>
      <AddPuppy savePuppy={handleSavePuppy} />
      <div className="puppy-cards">
        {puppyList.map((puppy: IPuppy, idx) => (
          <PuppyItem
            key={idx}
            updatePuppy={handleUpdatePuppy}
            deletePuppy={handleDeletePuppy}
            puppy={puppy}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
