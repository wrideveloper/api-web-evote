//const Calon = require('../model/calon.model');
const CalonModel = require('../model/calon.model');

//get all calon
exports.getCalonList = (req, res)=>{
  //console.log('Ini adalah semua daftar Calon');
  CalonModel.getAllCalon((err, calon)=>{ 
    console.log('We are here');
    if(err)
    res.send(err);
    console.log('Calon',calon);
    res.send(calon);
  })
} 
//get calon by id
exports.getCalonByID = (req, res) =>{
  CalonModel.getCalonByID(req.params.id_calon, (err, calon)=>{
    if(err)
    res.send(err);
    console.log('Data calon tunggal', calon);
    res.send(calon);
  })
}
//create new Calon
exports.createNewCalon = (req, res) =>{
  const calonReqData = new CalonModel(req.body);
  console.log('calonReqData', calonReqData);
  //check null
  if(req.body.contructor === Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false, message: 'Harap isi semua kolom'});
  }else{
    CalonModel.createCalon(calonReqData, (err, calon)=>{
      if(err)
        res.send(err);
        res.json({status: true, message: 'Calon berhasil ditambah', data: calon.insertId})
    })
  }
}

//update calon
exports.updateCalon = (req, res) =>{
  const calonReqData = new CalonModel(req.body);
  console.log('calonReqData update', calonReqData);
  //check null
  if(req.body.contructor === Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false, message: 'Harap isi semua kolom'});
  }else{
    CalonModel.updateCalon(req.params.id_calon, calonReqData, (err, calon)=>{
      if(err)
        res.send(err);
        res.json({status: true, message: 'Calon berhasil diupdate'})
    })
  }
}
//delete calon
exports.deleteCalon = (req, res)=>{
  CalonModel.deleteCalon(req.params._calon, (err, calon)=>{
    if(err)
    res.send(err);
    res.json({success: true, message: 'Calon berhasil dihapus'});
  })
}