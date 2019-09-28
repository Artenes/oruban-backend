import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { _id: false }
);

const contractSchema = new mongoose.Schema(
  {
    daily_hours: String,
    lunch_hours: String,
    daily_hours_max: String,
    in_between_hours: String,
    lunch_max: String,
  },
  { _id: false }
);

const justifcationSchema = new mongoose.Schema(
  {
    hours: String,
    reason: String,
  },
  { _id: false }
);

const workdaySchema = new mongoose.Schema({
  date: String,
  clocks: [{ hour: String, reason: String }],
  justification: justifcationSchema,
  absent: Boolean,
});

const balanceSchema = new mongoose.Schema(
  {
    base: String,
  },
  { timestamps: true }
);

const employeeSchema = new mongoose.Schema({
  profile: profileSchema,
  balance: balanceSchema,
  contract: contractSchema,
  workdays: [workdaySchema],
});

export default mongoose.model('Employee', employeeSchema);
