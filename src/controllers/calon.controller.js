const CalonModel = require('../models/calon.model');

//get all calon
exports.getCalonList = (req, res)=>{
  //console.log('Ini adalah semua daftar Calon');
  CalonModel.getAllCalon((err, calon)=>{ 
    console.log('We are here');
    if(err)
      res.send(err);
    else
    res.send(calon);
    console.log('Calon',calon);
  })
} 
//get calon by id
exports.getCalonByID = (req, res) =>{
  CalonModel.getCalonByID(req.params.id, (err, calon)=>{
    if(err)
      res.send(err);
    else
    res.send(calon);
    console.log('Data calon tunggal', calon);
  })
}
//create new Calon
exports.createNewCalon = (req, res) =>{
  let calonReqData = new CalonModel(req.body);
  console.log('calonReqData', req.body);
  //check null
  if(req.body.contructor === Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false, message: 'Harap isi semua kolom'});
  } else {    
    // console.log(file);
    
    // if (!file) {
    //     res.status(400).send({
    //         status: false,
    //         data: "No File is selected.",
    //     });
    // }    
    CalonModel.createCalon(calonReqData, (err, calon)=>{
      if(err)
        res.send(err);
      else
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
    CalonModel.updateCalon(req.params.id, calonReqData, (err, calon)=>{
      if (err) {
        res.send(err);
      } else {
        res.json({ status: true, message: 'Calon berhasil diupdate' })
      }      
    })
  }
}
//delete calon
exports.deleteCalon = (req, res)=>{
  CalonModel.deleteCalon(req.params.id, (err, calon)=>{
    if (err) {
      res.send(err);
    } else {
      res.json({success: true, message: 'Calon berhasil dihapus'});
    }
  })
} 