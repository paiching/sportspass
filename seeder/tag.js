const Tag = require('./models/Tag');

async function createTag() {
    const newTag = new Tag({
        name: 'Music',
        eventNum: 10 
    });

    try {
        await newTag.save();
        console.log('Tag created successfully.');
    } catch (error) {
        console.error('Error creating tag:', error);
    }
}

createTag();
