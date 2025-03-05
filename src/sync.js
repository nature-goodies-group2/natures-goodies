const sequelize = require('./client');
const User = require('../../models/User');
const Product = require('../../models/Product');

(async () => {
  try {
    await sequelize.sync({ force: true }); // ⚠️ WARNING: This resets the database
    console.log('✅ All tables created successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    process.exit(1);
  }
})();
