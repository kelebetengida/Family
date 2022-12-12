const { AuthenticationError } = require('apollo-server-express');
const { User, Interest, Profession } = require('../models');
const ObjectId = require('mongoose').Types.ObjectId;
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
  
      if (username == null || username == ''){
        return null;
      }
      // const params = username? { username } : {};
      let tmp = await User.find({username})
        .populate('interest')
        .populate('profession');

      return tmp[0];
    },
    me: async (parent, args, context) => {
      if (context.user) {
        let usr = await User.findOne({ _id: context.user._id })
            .populate('interest')
            .populate('profession');

        console.log(usr);
        return usr;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    users: async (parent, { filter }) => {
      console.log('parent:', filter.parent);
      console.log('interest:', filter.interest);
      console.log('username:', filter.username);
      console.log('profession:', filter.profession);
      console.log('filter:', filter);
      const params =
        filter.username || filter.interest || filter.profession ? filter : {};
      // const params = username? { username } : {};
      let tmp = await User.find(params)
        .populate('interest')
        .populate('profession');
      return tmp;
    },
    interests: async () => {
      return await Interest.find({});
    },
    professions: async () => {
      return await Profession.find({});
    },
  },

  Mutation: {
    addUser: async (
      parent,
      {
        username,
        email,
        password,
        organization,
        location,
        profession,
        interest,
      }
    ) => {
      let userProf = await Profession.findOne({ _id: profession });
      let userInter = await Interest.findOne({ _id: interest });
      
      let user = await User.create({
        username,
        email,
        password,
        organization,
        location,
        profession: userProf?._id,
        interest: userInter?._id
      });

      user = user.toObject();
      user.profession = userProf;
      user.interest = userInter;

      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    // Works above here

    // addThought: async (parent, { thoughtText }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.create({
    //       thoughtText,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    changeInterest: async (parent, { userId, interestOption }, context) => {
      if (context.interest) {
        return Interest.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: {
              interests: {
                interestOption,
                // commentAuthor: context.user.username,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // addComment: async (parent, { thoughtId, commentText }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $addToSet: {
    //           comments: { commentText, commentAuthor: context.user.username },
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },

    removeUser: async (parent, { userId }, context) => {
      if (context.user) {
        const user = await User.findOneAndDelete({
          _id: userId,
          // thoughtAuthor: context.user.username,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $pull: { thoughts: thought._id } }
        // );

        return 'You successfully deleted your account.';
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // removeThought: async (parent, { thoughtId }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.findOneAndDelete({
    //       _id: thoughtId,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // removeComment: async (parent, { thoughtId, commentId }, context) => {
    //   if (context.user) {
    //     return Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       {
    //         $pull: {
    //           comments: {
    //             _id: commentId,
    //             commentAuthor: context.user.username,
    //           },
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;
