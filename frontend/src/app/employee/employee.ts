export class Employee {
    constructor(
      public firstName: string | null,
      public lastName: string | null,
      public email: string | null,
      public phoneNumber: string | null,
      public position: string | null,
      public department: string | null,
      public id?: number,
    ) {}
  }
  