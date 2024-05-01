const Order = require('./models/Order');

async function createOrder() {
    const newOrder = new Order({
        // 填充具体的订单信息
    });

    try {
        await newOrder.save();
        console.log('Order created successfully.');
    } catch (error) {
        console.error('Error creating order:', error);
    }
}

createOrder();
