import sharp from "sharp";

export async function generateLQIP(imagePath) {
  if (typeof window !== "undefined") {
    throw new Error("generateLQIP não deve ser executado no lado do cliente");
  }

  const lqipBuffer = await sharp(imagePath)
    .resize({ width: 10 }) // Ajuste a largura conforme necessário
    .toBuffer();

  return `data:image/jpeg;base64,${lqipBuffer.toString("base64")}`;
}
