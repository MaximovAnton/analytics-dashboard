import { Kafka } from "kafkajs";

async function startConsumer() {
  const kafka = new Kafka({
    clientId: "analytics-consumer",
    brokers: ["kafka:9092"],
    retry: {
      retries: 100,
      initialRetryTime: 300,
      maxRetryTime: 30000,
    }
  });

  const consumer = kafka.consumer({ groupId: "analytics-group" });

  while (true) {
    try {
      console.log("Connecting consumer...");
      await consumer.connect();

      await consumer.subscribe({
        topic: "events",
        fromBeginning: true
      });

      console.log("Kafka consumer started. Waiting for messages...");

      await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          console.log("EVENT RECEIVED:", message.value.toString());
        },
      });

      break;
    } catch (error) {
      console.error("Consumer failed:", error.message);
      console.log("Retrying in 3 seconds...");
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
}

startConsumer();

