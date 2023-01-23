const { Sequelize } = require("sequelize");
const configs = require('../configs');
const sequelize = new Sequelize(configs.DB_NAME, configs.DB_USER, configs.DB_PASSWORD, {
    dialect: configs.DB_DIALECT,
    host: configs.DB_HOST,
    port: configs.DB_PORT,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("---Sequelize Connected---");
    } catch (error) {
        console.log("Sequelize Error", error);
    }
})();

const NguoiDung = require("./NguoiDung")(sequelize);
const CongViec = require("./CongViec")(sequelize);
const ChiTietLoaiCongViec = require("./ChiTietLoaiCongViec")(sequelize);
const LoaiCongViec = require("./LoaiCongViec")(sequelize);
const ThueCongViec = require("./ThueCongViec")(sequelize);
const BinhLuan = require("./BinhLuan")(sequelize);
// quan he nguoi dung - cong viec //
NguoiDung.hasMany(CongViec,{foreignKey:"nguoiTao"});
CongViec.belongsTo(NguoiDung,{foreignKey:"nguoiTao"});

NguoiDung.belongsToMany(CongViec,{through:ThueCongViec,foreignKey:'maNguoiThue'});
CongViec.belongsToMany(NguoiDung,{through:ThueCongViec,foreignKey:'maCongViec'});

NguoiDung.belongsToMany(CongViec,{through:BinhLuan,foreignKey:'maNguoiBinhLuan'});
CongViec.belongsToMany(NguoiDung,{through:BinhLuan,foreignKey:'maCongViec'});
// quan he cong viec - chi tiet loai cong viec
ChiTietLoaiCongViec.hasMany(CongViec,{foreignKey:"maChiTietLoai"});
CongViec.belongsTo(ChiTietLoaiCongViec,{foreignKey:"maChiTietLoai"});
// quan he chi tiet loai cong viec - loai cong viec
LoaiCongViec.hasMany(ChiTietLoaiCongViec,{foreignKey:"maLoaiCongViec"});
ChiTietLoaiCongViec.belongsTo(LoaiCongViec,{foreignKey:"maLoaiCongViec"});


module.exports = {
    sequelize,
    NguoiDung,
    CongViec,
    ChiTietLoaiCongViec,
    LoaiCongViec,
    BinhLuan,
    ThueCongViec
}