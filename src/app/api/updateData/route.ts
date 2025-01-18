import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { DateUtils } from "@/utils/date/dateUtils";
import { StoreData } from "@/app/fun/dndSheetCreator/models/StoredData.model";

const originPath = path.join(process.cwd(), "data");

export async function POST(request: NextRequest) {
  // console.clear();
  // console.log('UPDATE DATA API');

  const storeData: StoreData = await request.json();
  const filePath = path.join(originPath, `${storeData.schemma}.json`);

  try {
    // Verifica se o esquema é válido
    if (!validSchemmas.includes(storeData.schemma)) {
      throw new Error("Esquema inválido");
    }

    // Cria a pasta "data" se ela não existir
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    // Verifica se já teve atualização hoje se o arquivo existir
    if (fs.existsSync(filePath)) {
      const currentData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      if (DateUtils.isToday(currentData.updated)) {
        return NextResponse.json({ message: "Arquivo já atualizado hoje" });
      }
    }
      // Salva os dados no arquivo JSON com a data atual
    fs.writeFileSync(filePath, JSON.stringify(storeData, null, 2));


    return NextResponse.json({ message: "Dados salvos com sucesso!" });
  } catch(error) {
    console.error("Erro no endpoint /api/updateData:", error);
    return NextResponse.json(
      { message: "Falha ao salvar dados", error: error },
      { status: 500 }
    );
  }
}

const validSchemmas = ["resources", "classes"];