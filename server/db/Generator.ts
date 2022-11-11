import { faker, SexType } from "@faker-js/faker";
import lodash from "lodash";

module.exports = () => {
  return {
    users: lodash.times(100, (n) => {
      return createRandomUser();
    }),
  };
};

class User {
  id: number;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  gender: SexType;
  username: string;
  islodashverified: boolean;
  website: string;
  aboutlodashyou: string;
  country: string;
  postlodashcount: number;
  lastlodashpost: number;
  lastlodashad: number;
  language: string;
  followinglodashcount: number;
  followerlodashcount: number;
  wallet: string;
  iplodashaddress: string;
  lastlodashactive: string;
  memberlodashsince: string;
  profilelodashprivacy: string;
}

function createRandomUser(): User {
  const sex = this.faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    id: faker.helpers.unique(faker.datatype.number),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    gender: sex,
    username: faker.internet.userName(firstName, lastName),
    islodashverified: faker.datatype.boolean(),
    website: faker.internet.url(),
    aboutlodashyou: faker.random.words(10),
    country: faker.address.country(),
    postlodashcount: faker.datatype.number(100),
    lastlodashpost: faker.datatype.number(1),
    lastlodashad: faker.datatype.number(10),
    language: faker.helpers.arrayElement(["french", "english"]),
    followinglodashcount: faker.datatype.number(5000),
    followerlodashcount: faker.datatype.number(5000),
    wallet: faker.datatype.float.toString(),
    iplodashaddress: faker.internet.ip(),
    lastlodashactive: faker.datatype.datetime().toUTCString(),
    memberlodashsince: faker.datatype.datetime().toDateString(),
    profilelodashprivacy: faker.helpers.arrayElement([
      "everyone",
      "followers",
      "none",
    ]),
  };
}
