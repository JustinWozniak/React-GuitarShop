require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_I = 10;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 100
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 100
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    await bcrypt
      .genSalt(SALT_I)
      .then(salt => bcrypt.hash(user.password, salt))
      .then(hash => (user.password = hash))
      .then(() => next())
      .catch(error => next(error));
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    return new Error(error);
  }
};

userSchema.methods.generateToken = async function () {
  const token = jwt.sign(this._id.toHexString(), process.env.SECRET);
  this.token = token;
  const { token: savedToken } = await this.save();
  return savedToken;
};

userSchema.statics.findByToken = async function (token) {
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await this.findOne({ _id: decoded, token });
    if (!user) {
      throw new Error('Token is not valid');
    }
    return user._doc;
  } catch (error) {
    throw Error(error);
  }
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
