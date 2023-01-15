import { config } from 'dotenv';
config();
import * as amqp from 'amqplib';

let connection: amqp.Connection;
let channel: amqp.Channel;

const connect = async () => {
  try {
    connection = await amqp.connect(process.env.RABBITMQ_CONNECTION || 'amqp://localhost:6572');
    channel = await connection.createChannel();
    await channel.assertQueue('test-queue');
  } catch (error) {
    console.error(error);
  }
}

connect();