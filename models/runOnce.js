

const sequelize = require("../config/connection.js")
const queryInterface = sequelize.getQueryInterface()

async function remove() {
    await queryInterface.removeConstraint('post', 'post_ibfk_1')
}
remove()