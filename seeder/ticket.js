const Ticket = require('./models/Ticket');

async function createTicket() {
    const newTicket = new Ticket({
        orderId: '5f8d04d5b54764421b7156bc',
        eventId: '5f8d04d5b54764421b7156bd',
        sessionId: '5f8d04d5b54764421b7156be',
        price: '100USD',
        status: true,
        unTicketReason: '',
        notes: 'Front row seating'
    });

    try {
        await newTicket.save();
        console.log('Ticket created successfully.');
    } catch (error) {
        console.error('Error creating ticket:', error);
    }
}

createTicket();
