const Updates = require("../models/update");

const handleCreateUpdate = async (req, res) => {
  try {
   

    const body = req.body;
    await Updates.create(body);

    res.status(200).json({
      message: "Update created successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again!" });
  }
};

const handleGetAllUpdateData = async (req, res) => {
 try {
   const allUpdates = await Updates.find({});

   res.status(200).json({
     updates: allUpdates,
   });
 } catch (error) {
   console.error(error);
   res.status(500).json({ message: "Server error, please try again!" });
 }
};

const handleEditUpdateData = async (req, res) => {
     try {

       const { updateId } = req.params;
       const { logo, buttonText } = req.body;

       const updates = await Updates.findById(updateId);

       updates.logo = logo;
       updates.buttonText = buttonText;

       await updates.save();

       res.status(200).json({
         message: "Updated successfully!",
       });
     } catch (error) {
       console.error(error);
       res.status(500).json({ message: "Server error, please try again!" });
     }
}

module.exports = {
  handleCreateUpdate,
  handleGetAllUpdateData,
  handleEditUpdateData,
};
