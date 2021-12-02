export const commonConfig = () => ({
    kafka: {
        KAFKA_BROKERS: process.env.KAFKA_BROKERS,
        KAFKA_TOPIC: process.env.KAFKA_TOPIC,
    },
});
