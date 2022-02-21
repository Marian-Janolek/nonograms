import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserInput {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide email'],
      minlength: 6,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (this: UserDocument) {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model<UserDocument>('User', UserSchema);
