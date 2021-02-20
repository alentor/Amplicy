import mongoose from 'mongoose';

export class db {

    static connect(address: string) {
        mongoose.connect(address, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', (error) => {
            console.error('Error connecting to database: ', error);
            // return process.exit(1);
        });
        db.once('open', () => {
            // we're connected!
            console.info(`Successfully connected to ${address}`);
        });
    }
}