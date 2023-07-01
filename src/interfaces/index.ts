export interface Result {
  status: number;
  text: string;
}

export interface Status {
  success: boolean;
  message: string;
}

export interface Errors {
  type: string;
  message: string;
}

export interface formState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
