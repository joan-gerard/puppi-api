import e, { RequestHandler } from "express";
import { IPuppy } from "../../types/puppy";
import Puppy from "../../models/puppy";

const getPuppies: RequestHandler = async (req, res): Promise<void> => {
  try {
    const puppies: IPuppy[] = await Puppy.find();
    res.status(200).json({ puppies });
  } catch (error) {
    throw error;
  }
};

const handleAddPuppy: RequestHandler = async (req, res): Promise<void> => {
  try {
    // const body = req.body as Pick<IPuppy, "breed" | "name" | "dob">;
    console.warn("the request", req.body);

    const puppy: IPuppy = new Puppy({
      _id: req.body.id,
      breed: req.body.breed,
      name: req.body.name,
      dob: req.body.dob,
    });

    // puppy.save();
    const newPuppy = await puppy.save();
    console.log("after newPuppy");
    const allPuppies = await Puppy.find();
    console.log("after allPuppies");
    res
      .status(201)
      .json({ message: "Puppy added", puppy: newPuppy, puppies: allPuppies });
  } catch (error) {
    console.log("I am an Add error");

    throw error;
  }
};

const updatePuppy: RequestHandler = async (req, res): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    // const body = req.body
    // const id = req.params.id

    const updatePuppy: IPuppy | null = await Puppy.findByIdAndUpdate(
      {
        _id: id,
      },
      body
    );

    const allPuppies: IPuppy[] = await Puppy.find();
    res.status(200).json({
      message: "Puppy updated",
      puppy: updatePuppy,
      puppies: allPuppies,
    });
  } catch (error) {
    throw error;
  }
};

const deletePuppy: RequestHandler = async (req, res): Promise<void> => {
  try {
    const deletedPuppy: IPuppy | null = await Puppy.findByIdAndRemove(
      req.params.id
    );

    const allPuppies: IPuppy[] = await Puppy.find();

    res.status(200).json({
      message: "Puppy deleted",
      puppy: deletedPuppy,
      puppies: allPuppies,
    });
  } catch (error) {
    throw error;
  }
};

export { getPuppies, handleAddPuppy, updatePuppy, deletePuppy };
