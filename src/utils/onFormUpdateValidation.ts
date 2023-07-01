import { Errors } from "../interfaces";

export const onFormUpdateValidation = (
  category: string,
  value: string,
  setError: (error: Errors | null) => void
) => {
  switch (category) {
    case "firstName":
      if (value === "") {
        setError({
          type: "firstName",
          message: "First Name shouldn't be empty",
        });
        return false;
      } else {
        setError(null);
        return true;
      }
    case "lastName":
      if (value === "") {
        setError({
          type: "lastName",
          message: "Last Name shouldn't be empty",
        });
        return false;
      } else {
        setError(null);
        return true;
      }
    case "email":
      if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setError({
          type: "email",
          message: "Email not valid 'example@example.com'",
        });
        return false;
      } else if (value === "") {
        setError({
          type: "email",
          message: "Email shouldn't be empty",
        });
        return false;
      } else {
        setError(null);
        return true;
      }
    case "phone":
      if (!value.match(/^\d{10}$/g)) {
        setError({
          type: "phone",
          message: "Phone not valid",
        });
        return false;
      } else if (value === "") {
        setError({
          type: "phone",
          message: "Phone shouldn't be empty",
        });
        return false;
      } else {
        setError(null);
        return true;
      }
    case "message":
      if (value === "") {
        setError({
          type: "message",
          message: "Message shouldn't be empty",
        });
        return false;
      } else {
        setError(null);
        return true;
      }
    default:
      break;
  }
};
