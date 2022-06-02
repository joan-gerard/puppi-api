import React, { useEffect, useState } from "react";
import PuppyItem from "./components/PuppyItem";
import AddPuppy from "./components/AddPuppy";
import { getPuppies, addPuppy, deletePuppy, updatePuppy } from "./API";
import "./App.scss";

const App = () => {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  useEffect(() => {
    fetchPuppies();
  }, []);

  const fetchPuppies = (): void => {
    getPuppies()
      .then(({ data: { puppies } }: IPuppy[] | any) => setPuppies(puppies))
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

        if (status !== 200) {
          throw new Error("Error! Puppy not deleted");
        }

        setPuppies(data.puppies);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdatePuppy = (e: React.FormEvent, formData: IPuppy): void => {
    updatePuppy(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Puppy not updated");
        }
        setPuppies(data.puppies);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>My Puppies</h1>
      <AddPuppy savePuppy={handleSavePuppy} />
      <div className="puppy-cards">
        {puppies.map((puppy: IPuppy) => (
          <PuppyItem
            key={puppy._id}
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
