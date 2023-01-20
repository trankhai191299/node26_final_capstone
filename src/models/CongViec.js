const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    return sequelize.define(
        "CongViec",{
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            tenCongViec:{
                type:DataTypes.STRING,
                field:"ten_cong_viec"
            },
            danhGia:{
                type:DataTypes.INTEGER,
                field:"danh_gia"
            },
            giaTien:{
                type:DataTypes.INTEGER,
                field:"gia_tien",
                validate:{
                    isNumeric:{
                        msg:"gia tien la so"
                    }
                }
            },
            hinhAnh:{
                type:DataTypes.STRING,
                field:"hinh_anh"
            },
            moTa:{
                type:DataTypes.STRING,
                field:"mo_ta"
            },
            moTaNgan:{
                type:DataTypes.STRING,
                field:"mo_ta_ngan"
            },
            saoCongViec:{
                type:DataTypes.INTEGER,
                field:'sao_cong_viec'
            },
            maChiTietLoai:{
                type:DataTypes.INTEGER,
                field:"ma_chi_tiet_loai",
                allowNull:false
            },
            nguoiTao:{
                type:DataTypes.STRING,
                field:"nguoi_tao",
                allowNull:false
            }

        },{
            tableName:"cong_viec",
            timestamps:false,
        }
    )
}