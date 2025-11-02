export interface Image {
  id: string;
  imageUrl: string;
  phrase: string;
}

const accessKey = 'B60Q7uUmqKoYliEMr9tVlomEP6vJcIEiE4KDwnX7LeY';

// 3. Função de Busca Principal (com a ordem da URL do vídeo)
export const getImagesForSearch = async (word: string): Promise<Image[]> => {
  
  if (!accessKey) {
    return [];
  }

  const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${word}&per_page=5&orientation=landscape`;

  try {
    
    const response = await fetch(url);

    if (!response.ok) {
      console.error('Erro ao buscar na API Unsplash:', response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    // Acesso ao Array de resultados
    const photos = data.results;

    // 7. Mapeamento
    const images: Image[] = photos.map((photo: any) => ({
      id: photo.id,
      imageUrl: photo.urls.small,
      phrase: photo.alt_description || photo.description || word,
    }));

    return images;

  } catch (error) {
    console.error('Erro de rede ao conectar com a Unsplash:', error);
    return [];
  }
};