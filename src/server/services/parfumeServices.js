const parfumeee=require("./../modules/Parfume.js")
exports.getAll = async () => {
    let parfumes = await parfumeee.find().lean();
  
     
    return parfumes;
  };