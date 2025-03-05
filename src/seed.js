require('dotenv').config('./env');
const sequelize = require('./client');
const User = require('../../models/User');
const Product = require('../../models/Product');

(async () => {
  try {
    // Sync tables (⚠️ This will delete existing data)
    await sequelize.sync({ force: true }); 
    console.log('✅ Database synced!');

    // Insert sample users
    await User.bulkCreate([
      { username: 'admin', email: 'admin@example.com', password: 'securepassword', is_admin: true },
      { username: 'john_doe', email: 'john@example.com', password: 'password123', is_admin: false },
    ]);
    console.log('✅ Users seeded!');

    // Insert sample products
    await Product.bulkCreate([
      { name: 'Coffee Beans', type: 'Beverage', description: 'Organic Coffee Beans', price: 10, imagelink: 'coffee.jpg' },
      { name: 'Green Tea', type: 'Beverage', description: 'Premium Green Tea Leaves', price: 12, imagelink: 'tea.jpg' },
      { name: 'Handmade Necklace', type: 'Jewelry', description: 'Beautiful handcrafted necklace', price: 25, imagelink: 'necklace.jpg' },
    ]);
    console.log('✅ Products seeded!');

    console.log('🎉 Seeding complete!');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
})();
