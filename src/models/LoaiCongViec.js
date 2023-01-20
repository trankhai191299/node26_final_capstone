const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    return sequelize.define(
        "LoaiCongViec",{
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            tenLoaiCongViec:{
                type:DataTypes.STRING,
                field:'ten_loai_cong_viec'
            }
        },{
            tableName:'loai_cong_viec',
            timestamps:false
        }
    )
}