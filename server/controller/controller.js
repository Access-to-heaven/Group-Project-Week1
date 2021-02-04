class Controller {
  static postLogin(req,res,next){
    
  }
  static postRegister(req,res,next){
    
  }
  static getJadwal(req,res,next){
    
  }
  static getAlquran(req,res,next){
    
  }
  static getKisah(req,res,next){
    const nabi = req.body.nabi || 'adam'
    axios({
      method: 'GET',
      url: `https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=${nabi}`
    })
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      next(err)
    })
  }
  static putSetting(req,res,next){
    
  }
  static postGoogle(req,res,next){
    
  }
}

module.exports = Controller