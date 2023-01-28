import typesense from 'typesense';
import { MongoClient } from 'mongodb';

(async () => {
	try {
		const client = new MongoClient(process.env.MONGO_CONNECTION_STRING || '', {
			connectTimeoutMS: 1000,
		});

		await client.connect();

		const db = await client.db(process.env.MONGO_DATABASE);
		db.command({ ping: 1 });

		const col = await db.collection(process.env.MONGO_COLLECTION || '');
		const numberOfDocuments = await col.countDocuments();
		if (numberOfDocuments == 0) {
			throw new Error(`MongoDB Collection ${process.env.MONGO_COLLECTION} has nothing in it.`);
		}
	} catch (e) {
		console.log(e);
		process.exit(1);
	}
	const typesenseClient = new typesense.Client({
		nodes: [
			{
				host: 'typesense', //TODO
				port: 8108,
				protocol: 'http',
			},
		],
		apiKey: process.env.TYPESENSE_API_KEY || '',
	});
	try {
		// Delete if the collection already exists from a previous example run
		await typesenseClient.collections(process.env.TYPESENSE_COLLECTION || '').delete();
	} catch (error) {
	}
	process.exit(0);

})();
