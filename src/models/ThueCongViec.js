const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    return sequelize.define(
        "ThueCongViec",{
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            maCongViec:{
                type:DataTypes.INTEGER,
                field:"ma_cong_viec"
            },
            maNguoiThue:{
                type:DataTypes.INTEGER,
                field:"ma_nguoi_thue"
            },
            ngayThue:{
                type:DataTypes.DATE,
                field:'ngay_thue'
            },
            hoanThanh:{
                type:DataTypes.BOOLEAN,
                defaultValue:false,
                field:'hoan_thanh'
            }
        },{
            tableName:"thue_cong_viec",
            timestamps:false
        }
    )
}