var connection = require('../../config/db.config');

var Calon = function(calon){
    this.id_calon = calon.id_calon;
    this.nama = calon.nama;
    this.kelas = calon.kelas;
    this.visi = calon.visi;
    this.misi = calon.misi;
    this.foto = calon.foto; 
}

//get all calon
Calon.getAllCalon = (result) =>{
    connection.query('SELECT * FROM calon', (err, res)=>{
        if(err){
            console.log('Error while fetching calon', err);
            result(null,err);
        }else{
            console.log('Calon sukses di fetch');
            result(null,res);
        }
    })
}
//get Calon by ID
Calon.getCalonByID = (id_calon, result)=>{
    connection.query('SELECT * FROM calon WHERE id_calon?', id_calon, (err, res)=>{
        if(err){
            console.log('Eror ketika fetch calon by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}
//create new Calon
Calon.createCalon = (calonReqData, result)=>{
    connection.query('INSERT INTO calon SET ? ', calonReqData, (err, res)=>{
        if(err){
            console.log('Eror ketika memasukkan data calon');
            result(null, err);
        }else{
            console.log('Calon berhasil ditambahkan');
            result(null, res)
        }
    })
}
//update calon
Calon.updateCalon = (id_calon, calonReqData, result)=>{
    connection.query("UPDATE calon SET nama=?,kelas=?,visi=?,misi=?,foto=?",
    [calonReqData.nama, calonReqData.kelas, calonReqData.visi, 
    calonReqData.misi, calonReqData.foto, id_calon],
    (err, res)=>{
        if(err){
            console.log('Eror ketika update calon');
            result(null, err);
        }else{
            console.log('Calon berhasil update');
            result(null, res);
        }
    })
}
//delete calon
Calon.deleteCalon = (id_calon, result)=>{
    connection.query('DELETE FROM calon WHERE id_calon=?',[id_calon], (err, res)=>{
        if(err){
            console.log('Error ketika hapus calon');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Calon;