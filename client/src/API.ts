import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getPuppies = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const puppies: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/puppies"
    );
    console.log('puppies from api call', puppies)
    return puppies;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addPuppy = async (
  formData: IPuppy
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    
    const puppy = {
      breed: formData.breed,
      name: formData.name,
      dob: formData.dob,
    };
    const savePuppy: AxiosResponse<ApiDataType> = await axios.post(
      `${baseUrl}/add-puppy`,
      //   baseUrl + "/add-puppy",
      puppy
    );
    return savePuppy;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updatePuppy = async (
  formData: IPuppy
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const puppyUpdate = {
      // _id: formData._id,
      breed: formData.breed,
      name: formData.name,
      dob: formData.dob,
    };
    const updatedPuppy: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-puppy/${formData._id}`,
      puppyUpdate
    );

    return updatedPuppy;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deletePuppy = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedPuppy: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-puppy/${_id}`
    );
    return deletedPuppy;
  } catch (error: any) {
    throw new Error(error);
  }
};
