import { Pet } from "./pet";

export interface Tutor {
  id: number;
  name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  zip_code: string;
  pets: Pet[];
}
