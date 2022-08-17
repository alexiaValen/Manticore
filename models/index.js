const User = require('./User');
const Blog = require('./Blog');

Blog.belongsTo (User, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blog };
