const {DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize)=>{
    return sequelize.define(
        "NguoiDung",{
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            name:{
                type:DataTypes.STRING,
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:'email',
                validate:{
                    isEmail:{
                        msg:'invalid email'
                    },
                    notNull:{
                        msg:'require email'
                    }
                }
            },
            password:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notNull:{
                        msg:'require password'
                    }
                },
                set(value){
                    const salt = bcrypt.genSaltSync();
                    const hashedPassword = bcrypt.hashSync(value,salt);
                    this.setDataValue("password",hashedPassword);
                }
            },
            phone:{
                type:DataTypes.STRING,
            },
            birthday:{
                type:DataTypes.DATEONLY
            },
            gender:{
                type:DataTypes.ENUM('true','false'),
                defaultValue:'true'
            },
            role:{
                type:DataTypes.ENUM('USER','ADMIN'),
                defaultValue:'USER'
            },
            skill:{
                type:DataTypes.ARRAY(DataTypes.STRING)
            },
            certification:{
                type:DataTypes.ARRAY(DataTypes.STRING)
            },
            avatar:{
                type:DataTypes.STRING
            },
            bookingJob:{
                type:DataTypes.ARRAY(DataTypes.STRING)
            }
        },{
            tableName:"nguoi_dung",
            timestamps:false,
            defaultScope: {
                attributes: {
                    exclude: ["password"],
                },
            },
            hooks: {
                afterSave: (record) => {
                    delete record.dataValues.password;
                },
            },
        }
    )
}