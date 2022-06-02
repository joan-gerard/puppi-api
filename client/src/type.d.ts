interface IPuppy {
  _id: string;
  breed: string;
  name: string;
  dob: string;
  createdAt?: string;
  updatedAt?: string;
}

interface PuppyProps {
  puppy: IPuppy;
}

type ApiDataType = {
  message: string;
  status: string;
  puppies: IPuppy[];
  puppy?: IPuppy;
};
