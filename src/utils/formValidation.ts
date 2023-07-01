import { onFormUpdateValidation } from ".";
import { Errors, formState } from "../interfaces";

export const formValidation = (
  formDetails: formState,
  setError: (error: Errors | null) => void
) => {
  const errorsList = [];
  for (const [key, value] of Object.entries(formDetails)) {
    const response = onFormUpdateValidation(key, value, setError);
    errorsList.push(response);
  }
  if (errorsList.find((err) => err === false) === false) {
    return false;
  } else {
    return true;
  }
};
