const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    return sequelize.define(
        'BinhLuan',{
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            maCongViec:{
                type:DataTypes.INTEGER,
                field:"ma_cong_viec"
            },
            maNguoiBinhLuan:{
                type:DataTypes.INTEGER,
                field:"ma_nguoi_binh_luan"
            },
            ngayBinhLuan:{
                type:DataTypes.DATEONLY,
                validate:{
                    isDate:{
                        msg:"undefined ngay binh luan"
                    }
                },
                field:"ngay_binh_luan"
            },
            noiDung:{
                type:DataTypes.STRING,
                field:'noi_dung'
            },
            saoBinhLuan:{
                type:DataTypes.INTEGER,
                field:"sao_binh_luan"
            },
        },{
            tableName:'binh_luan',
            timestamps:false
        }
    )
}