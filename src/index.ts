import "reflect-metadata";
import { User } from "./entity/User";



const user = new User();

async function topdms() {
    console.log(await user.retornaUsuarios())
}

topdms()



