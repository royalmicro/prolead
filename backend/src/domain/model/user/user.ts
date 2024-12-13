export class User {
  private id: number;
  private email: string;
  private name: string;
  private password: string;

  constructor() {}
  public setId(id: number): this {
    this.id = id;
    return this;
  }

  public setEmail(email: string): this {
    this.email = email;
    return this;
  }

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setPassword(password: string): this {
    this.password = password;
    return this;
  }

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
