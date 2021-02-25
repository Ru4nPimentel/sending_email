import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository{

  private user: User[] = []

  async findByEmail(email: string): Promise<User> {

  }


async save(user: User): Promise<void>{
  this.user.push(user)
}
}