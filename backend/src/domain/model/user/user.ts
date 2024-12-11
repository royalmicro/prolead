export class User {
  constructor(
    private readonly id: number,
    private email: string,
    private name: string,
    private password: string,
  ) {}

  changeEmail(newEmail: string): void {
    // Lógica de negocio, por ejemplo, validación
    if (!newEmail.includes('@')) {
      throw new Error('Invalid email format');
    }
    this.email = newEmail;
  }

  // Getters
  getId(): number {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getName(): string {
    return this.name;
  }

  getPassword(): string {
    return this.password;
  }
}
