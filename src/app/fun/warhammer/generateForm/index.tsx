import { useState } from "react";
import { Rings } from "react-loading-icons";

interface GenerateImageProps {
  factionProps: string;
  promptProps: string;
  nameProps: string;
}

const GenerateImage: React.FC<GenerateImageProps> = ({
  factionProps,
  promptProps,
  nameProps,
}) => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    if (!prompt) return;

    setLoading(true);

    // Adicionando um prefixo para garantir que tudo seja interpretado como parte do universo Warhammer 40k
    const warhammerPrompt = `Context Warhammer 40k, faction is important then description: Description: ${prompt} and faction: ${factionProps}`;

    // Criando um FormData para enviar os dados corretamente
    const formData = new FormData();
    formData.append("prompt", warhammerPrompt);
    formData.append("output_format", "webp"); // Formato da imagem
    formData.append("aspect_ratio", "1:1"); // Aspect ratio (ajuste conforme necessário)

    try {
      const response = await fetch(
        "https://api.stability.ai/v2beta/stable-image/generate/ultra",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STABILITY_API_KEY}`,
            Accept: "image/*", // Se você quiser a imagem diretamente em bytes
          },
          body: formData,
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(
          "A DISTORÇÃO DO UNIVERSO ESTÁ PARADA E NENHUM SER PODE SER CRIADO AGORA!  (ou... acabaram os creditos)",
        );
        console.error("Error response:", errorData);
        throw new Error(`API responded with status ${response.status}`);
      }

      // Ao invés de usar response.json(), usamos response.blob()
      const imageBlob = await response.blob();
      setLoading(false);

      // Criando uma URL para o blob da imagem
      const imageUrl = URL.createObjectURL(imageBlob);

      // Atualizando o estado com o URL da imagem gerada
      setImageUrl(imageUrl);
    } catch (error) {
      setImageUrl(
        "https://cdn.pixabay.com/photo/2024/02/20/21/11/ai-generated-8586224_1280.png",
      );

      setErrorMessage(
        "A DISTORÇÃO DO UNIVERSO ESTÁ PARADA E NENHUM SER PODE SER CRIADO AGORA!  (ou... acabaram os creditos)",
      );
      console.error("Error during image generation:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Descreva o personagem
        </label>

        <textarea
          //prompt para gerar imagem por IA
          required
          id="description"
          placeholder="Descreva o personagem"
          value={prompt} // Associando o valor do campo ao estado
          onChange={(e) => setPrompt(e.target.value)} // Atualizando o estado conforme o usuário digita
          className="mt-1 p-3 border rounded-lg h-32 resize-none "
        ></textarea>
      </div>

      <button
        type="submit"
        className="py-3 mt-4 rounded-lg border hover:bg-success-700"
        onClick={handleGenerateImage}
        disabled={loading}
      >
        {loading ? "Criando personagem..." : "Criar personagem"}
      </button>
      {nameProps && (
        <p>
          {nameProps} - Faction {factionProps}
        </p>
      )}
      {imageUrl && <img src={imageUrl} alt="Generated" />}
      {!imageUrl && loading && <Rings color="#fff" height={100} width={100} />}
      {imageUrl && (
        <div className="flex flex-col">
          {promptProps && <p>{promptProps}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
