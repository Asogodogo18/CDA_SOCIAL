"use strict";
exports.__esModule = true;
var { faker } = require("@faker-js/faker");
var _ = require("lodash");
var db = require("../../users.json");
var dbPosts = require("../../posts.json");

const usersID = db.users.map((user) => user.id);

module.exports = function () {
  return {
    feeds: _.times(2, function (n) {
      return createRandomFeeds(n);
    }),
  };
};
var User = /** @class */ (function () {
  function User() {}
  return User;
})();

function createRandomUser() {
  var sex = faker.name.sexType();
  var firstName = faker.name.firstName(sex);
  var lastName = faker.name.lastName();
  var email = faker.helpers.unique(faker.internet.email, [firstName, lastName]);
  return {
    id: faker.helpers.unique(faker.datatype.number),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: email,
    firstName: firstName,
    lastName: lastName,
    gender: sex,
    username: faker.internet.userName(firstName, lastName),
    is_verified: faker.datatype.boolean(),
    website: faker.internet.url(),
    about_you: faker.random.words(10),
    country: faker.address.country(),
    post_count: faker.datatype.number(100),
    last_post: faker.datatype.number(1),
    last_ad: faker.datatype.number(10),
    language: faker.helpers.arrayElement(["french", "english"]),
    following_count: faker.datatype.number(5000),
    follower_count: faker.datatype.number(5000),
    wallet: faker.datatype.float.toString(),
    ip_address: faker.internet.ip(),
    last_active: faker.datatype.datetime().toUTCString(),
    member_since: faker.datatype.datetime().toDateString(),
    profile_privacy: faker.helpers.arrayElement([
      "everyone",
      "followers",
      "none",
    ]),
  };
}
function createRandomFeeds(param) {
  //create a collection of userID's for realtionship establishment in db
  const usersID = db.users.map((user) => user.id);

  return {
    id: param + 1,
    userId: faker.helpers.arrayElement(usersID),
    content: faker.helpers.arrayElements(dbPosts.posts),
  };
}
function createRandomPosts() {
  //create a collection of userID's for realtionship establishment in db
  const id = faker.helpers.unique(faker.datatype.number);
  const thread_id = faker.helpers.unique(faker.datatype.uuid);
  let reply = [];

  reply = _.times(faker.datatype.number(10), (n) => {
    return {
      id: faker.helpers.unique(faker.datatype.number),
      user_id: faker.helpers.arrayElement(usersID),
      text: faker.random.words(faker.datatype.number(50)),
      type: "text",
      replys_count: reply.length,
      reposts_count: faker.datatype.number(1000),
      likes_count: faker.datatype.number(10000),
      status: "active",
      thread_id,
      target: "publication",
      time: faker.datatype.datetime,
      offset_id: 10,
      is_repost: faker.datatype.boolean(),
      is_reposter: faker.datatype.boolean(),
      attrs: "",
      advertising: faker.datatype.boolean(),
      time_raw: "1655288662",
      can_delete: faker.datatype.boolean(),
      can_modified: faker.datatype.boolean(),
      media: [
        faker.helpers.maybe(
          () =>
            _.times(faker.datatype.number(4), () => {
              return { type: "image", uri: faker.image.image() };
            }),
          { probability: 0.1 }
        ),
      ],
      is_owner: faker.datatype.boolean(),
      has_liked: faker.datatype.boolean(),
      has_saved: faker.datatype.boolean(),
      has_reposted: faker.datatype.boolean(),
      reply_to: [id],
      reply: [],
    };
  });

  const Post = {
    id,
    user_id: faker.helpers.arrayElement(usersID),
    text: faker.random.words(faker.datatype.number(50)),
    type: "text",
    replys_count: faker.datatype.number(30),
    reposts_count: faker.datatype.number(1000),
    likes_count: faker.datatype.number(5000),
    status: "active",
    thread_id,
    target: "publication",
    time: faker.datatype.datetime,
    offset_id: 10,
    is_repost: faker.datatype.boolean(),
    is_reposter: faker.datatype.boolean(),
    attrs: "",
    advertising: faker.datatype.boolean(),
    time_raw: "1655288662",
    can_delete: faker.datatype.boolean(),
    can_modified: faker.datatype.boolean(),
    media: [
      faker.helpers.maybe(() =>
        _.times(faker.datatype.number(10), () => {
          return { type: "image", uri: faker.image.image() };
        })
      ),
    ],
    is_owner: faker.datatype.boolean(),
    has_liked: faker.datatype.boolean(),
    has_saved: faker.datatype.boolean(),
    has_reposted: faker.datatype.boolean(),
    reply_to: [],
    reply,
  };

  return Post;
}

function createRandomMessages() {
  //create a collection of userID's for realtionship establishment in db
  const usersID = db.users.map((user) => user.id);

  return {
    id: faker.helpers.unique(faker.datatype.number),
  };
}
