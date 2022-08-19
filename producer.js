const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9091', 'localhost:9092', 'localhost:9093'],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [
      {
        value: 'hello kafkajs users!',
      }
    ]
  });
  await producer.disconnect();
}

run();