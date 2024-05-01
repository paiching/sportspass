const Notification = require('./models/Notification');

async function createNotification() {
    const newNotification = new Notification({
        title: 'New Feature Released!',
        url: 'https://example.com/new-feature',
        userInfo: [{
            isRead: false,
            userId: '5d7a7a45b762a6617e16bdc5' 
        }]
    });

    try {
        await newNotification.save();
        console.log('Notification created successfully.');
    } catch (error) {
        console.error('Error creating notification:', error);
    }
}

createNotification();
