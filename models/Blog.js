const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pvBlog: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'user',
            key: 'id'
        }
      },


  },
  {
    // hooks: {
    //   beforeCreate: async (newUserData) => {
    //     newUserData.blog = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Blog;



