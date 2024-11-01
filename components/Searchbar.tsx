"use client"

// Searchbar.tsx
import { rasparComprarPoduto } from "@/lib/actions";
import { raspagemAmazonProduto } from "@/lib/scraper";
import { useState } from "react"

const isValidAmazonProductURL = (url:string) => {
  try{
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;

      if(hostname.includes('amazon.com') || 
      hostname.includes('amazon.')||
      hostname.endsWith('amazon')) {
        return true;
      }
  } catch (error) { 
    return false;
  }
}

import { FormEvent } from 'react';

const Searchbar = () => {
  // Estado para armazenar o valor do input
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Função para tratar a submissão do formulário
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) {
      return alert('Providencie um Link da Amazon Válido');
    }

    try {
      setIsLoading(true);
      // Lógica para buscar o produto pode ser adicionada aqui
      const product = await rasparComprarPoduto(searchPrompt);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        type="text"
        placeholder="Pesquisar pelo produto"
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn"
      disabled={searchPrompt ===''}>
        {isLoading ? 'Procurando...' : 'Buscar'}
      </button>
    </form>
  );
};

export default Searchbar;
