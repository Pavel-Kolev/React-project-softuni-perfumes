const parfumeee=require("./../models/Parfume.js")
exports.getAll = async () => {
    let parfumes = await parfumeee.find().lean();
  
     
    return parfumes;
  };