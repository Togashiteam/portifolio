import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const originPath = path.join(process.cwd(), "data");

export async function POST(request: NextRequest) {
  console.clear();
  const { schemma, data } = await request.json();
  console.log("schemma: ", schemma);
  const filePath = path.join(originPath, `${schemma}.json`);
  console.log("filePath: ", filePath);

  try {


    // Verifica se o esquema é "resources"
    if (!validSchemmas.includes(schemma)) {
      throw new Error("Esquema inválido");
    }

    // Cria a pasta "data" se ela não existir
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    // Salva os dados no arquivo JSON
    if (validSchemmas.includes(schemma)) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ message: "Dados salvos com sucesso!" });
  } catch (error) {
    console.error("Erro no endpoint /api/updateData:", error);
    return NextResponse.json(
      { message: "Falha ao salvar dados", error: error.message },
      { status: 500 }
    );
  }
}

const validSchemmas = ["resources", "classes"];