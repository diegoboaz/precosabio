"use server"
import { raspagemAmazonProduto } from "../scraper";

export async function rasparComprarPoduto (productURL: string) {

    if (!productURL) return;

    try {
        const rasparProduto = await raspagemAmazonProduto(productURL);
    } catch(error : any) {
        throw new Error(`Falha para criar/ atualizar produto: ${error.message}`)
    }
} 