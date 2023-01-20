const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    return sequelize.define(
        "ChiTietLoaiCongViec",{
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            tenChiTiet:{
                type:DataTypes.STRING,
                field:"ten_chi_tiet"
            },
            hinhAnh:{
                type:DataTypes.STRING,
                field:"hinh_anh"
            },
            maLoaiCongViec:{
                type:DataTypes.INTEGER,
                field:"ma_loai_chi_tiet",
                allowNull:false
            }
        },{
            tableName:'chi_tiet_loai_cong_viec',
            timestamps:false
        }
    )
}