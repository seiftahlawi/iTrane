
const TraineeModel = require('../../Models/Trainee.js')

exports.TraineesRequest=  async (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  
    let query = { isActive: false }
    try {
        TraineeModel.find(query).sort({ '_id': -1 }).exec((err, result) => {
            if (result) {
            
                return res.json(result)
            }
        })
    } catch (e) {
        console.log(e)
    }
}