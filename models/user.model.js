const { Model } = require('objection');

class UsersModel extends Model {
  static get tableName() {
    return 'users';
  }
}

// No equivalent of `ModelObject` type in JavaScript, just export the model class itself
module.exports = { UsersModel };
