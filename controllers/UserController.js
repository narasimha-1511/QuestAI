import User from "../models/userSchema.js";

const fetchUser = async (req, res) => {
  try {
    const { userId } = req?.decodedUser;
    const data = await User.findOne({ _id: userId });

    res.status(201).json({ success: true, message: "User fetched", data });
  } catch (error) {
    console.error(`Error in user controller:`, error);
    throw new Error(`Failed in user Controller: ${error.message}`);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req?.decodedUser;
    const { userName } = req.body;

    await User.updateOne(
      { _id: userId },
      {
        $set: {
          userName,
        },
      },
    );

    res.status(201).json({ success: true, message: "User updated" });
  } catch (error) {
    console.error(`Error in user controller:`, error);
    throw new Error(`Failed in user Controller: ${error.message}`);
  }
};

module.exports = { fetchUser, updateUser };
