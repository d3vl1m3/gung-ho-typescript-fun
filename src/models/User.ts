export default class User {
  private firstName: string;
  private lastName: string;
  private email: string|null = null;
  private dob: Date|null = null;

  constructor(
    firstName: string,
    lastName: string,
    email: string|null = null,
    dob: Date|null = null,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dob = dob;
  }
}
