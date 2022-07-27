import Role from '../models/Role';
import User from '../models/User';
import dotenv from "dotenv";
dotenv.config();

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if(count > 0) return;

    await new Role({ name: "admin" }).save();
    await new Role({ name: "user" }).save();
    await new Role({ name: "guest" }).save();

  } catch (error) {
    console.error(error);
  }
}

export const createUsers = async () => {
  try {
    let count = await User.estimatedDocumentCount();
    
    if (process.env.NODE_ENV == 'test') {
      const userRole = await Role.findOne({name: 'user'});
      const guestRole = await Role.findOne({name: 'guest'});

      await User.deleteMany({
        $or: [
          {roles: {$in: [userRole._id]}},
          {roles: {$in: [guestRole._id]}},
        ]
      });
      console.log('Users deleted in initialSetup');
      count = await User.estimatedDocumentCount();
      return count;
    };
    if (count > 0) return;
    
    const users = [
      {
        email: 'seeder.user1@gmail',
        password: 'password',
      }, {
        email: 'seeder.user2@gmail',
        password: 'password',
      }, {
        email: 'seeder.user3@gmail',
        password: 'password',
      }
    ];
    
    for (let user of users) {
      const newUser = new User(user);
      await newUser.save();
    }

    console.log('Seeder users created');
  } catch (error) {
    console.log(error);
  }
}
