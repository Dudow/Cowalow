interface IUser {
  me: boolean;
  admin: boolean;
  name: string;
}

const classifier = (userArray: IUser[]): Array<IUser> => {
  userArray.sort();
  var admins: Array<IUser> = [];
  var people: Array<IUser> = [];
  var finalArray: Array<IUser> = [];

  userArray.map((user: IUser) => {
    if (user.me) return finalArray.push(user);

    if (user.admin) return admins.push(user);

    return people.push(user);
  });

  admins.sort(compare);
  people.sort(compare);

  admins.splice(admins.length, 0, ...people);

  finalArray.splice(finalArray.length, 0, ...admins);

  return finalArray;
};

const compare = (user1: IUser, user2: IUser) => {
  if (user1.name < user2.name) {
    return -1;
  }
  if (user1.name > user2.name) {
    return 1;
  }
  return 0;
};

const userArray = [
  {
    me: true,
    admin: false,
    name: 'Ouvinte',
  },
  {
    me: false,
    admin: true,
    name: 'O Terno',
  },
  {
    me: false,
    admin: false,
    name: 'TheStrokes',
  },
  {
    me: false,
    admin: false,
    name: 'StickyFingers',
  },
  {
    me: false,
    admin: true,
    name: 'Los abuelos de la nada',
  },
];

console.log(classifier(userArray));
