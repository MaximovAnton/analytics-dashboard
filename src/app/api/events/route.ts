import { NextResponse } from "next/server";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "analytics-api",
  brokers: ["kafka:9092"]
});

const producer = kafka.producer();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.type || !body.timestamp) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }

    // connect producer (если не подключен)
    await producer.connect();

    // отправляем в Kafka
    await producer.send({
      topic: "events",
      messages: [
        { value: JSON.stringify(body) }
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Producer error" }, { status: 500 });
  }
}
