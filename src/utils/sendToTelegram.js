import axios from 'axios';

const BOT_TOKEN = "8706820686:AAEAf7o7ZRZX0KXFd7E8W19iFmS048WmL2c";
const CHAT_ID = "@velleity12a";

export async function sendToTelegram(text) {
    const { data } = await axios.post(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
            chat_id: CHAT_ID,
            text,
            parse_mode: "HTML"
        }
    );

    if (!data.ok) throw new Error(data.description);
    return data;
}