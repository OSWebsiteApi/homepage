import axios from 'axios';

async function sendDataToGrafana(data: any) {
    try {
        const response = await axios.post(
            `${process.env.WATCHDOG_GRAFANA_URL}/api/datasources/proxy/1/api/v1/write?db=mydb&u=grafana&p=${process.env.WATCHDOG_GRAFANA_API_KEY}`,
            data
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}