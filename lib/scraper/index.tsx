import axios from "axios";
import * as cheerio from 'cheerio';

export async function rasparCompraProduto(url: string) {
  if (!url) return;

  // Configuração do proxy Bright Data
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    proxy: {
      auth: {
        username: `${username}-session-${session_id}`,
        password,
      },
      host: 'brd.superproxy.io',
      port,
      rejectUnauthorized: false, // Corrigido
    },
  };

  try {
    // Fetch da página do produto
    const response = await axios.get(url, options);

    console.log(response.data);
  } catch (error: any) {
    throw new Error(`Falha ao raspar o Produto: ${error.message}`); // Corrigido
  }
};
