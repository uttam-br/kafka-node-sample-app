const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9091', 'localhost:9092', 'localhost:9093'],
});

const consumer = kafka.consumer({ groupId: 'my-consumer-group'});
const topic = 'animals';

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic,
  });
  await consumer.run({
    eachMessage: async ({ topic, partition, message}) => {
      console.log({
        value: message.value.toString(),
      });
   }
  });
}

run();