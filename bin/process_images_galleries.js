const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Atualize para o caminho correto
const baseDirectory = path.join(__dirname, "../public/midias/gallery");

function processImages() {
  if (!fs.existsSync(baseDirectory)) {
    console.error(`Erro: O diretório ${baseDirectory} não existe.`);
    return;
  }

  const galleries = fs.readdirSync(baseDirectory);

  galleries.forEach((gallery) => {
    const galleryPath = path.join(baseDirectory, gallery);

    if (fs.lstatSync(galleryPath).isDirectory()) {
      const files = fs.readdirSync(galleryPath);

      files.forEach((file) => {
        const filePath = path.join(galleryPath, file);

        if (
          file.endsWith(".jpg") &&
          !file.includes("-p") &&
          !file.includes("-blur")
        ) {
          const fileNameWithoutExtension = path.parse(file).name;

          // Criar imagem -p
          const processedImagePath = path.join(
            galleryPath,
            `${fileNameWithoutExtension}-p.jpg`
          );
          sharp(filePath)
            .resize(800) // Defina o tamanho desejado
            .toFile(processedImagePath)
            .then(() => {
              console.log(`Gerado e sobrescrito: ${processedImagePath}`);
            })
            .catch((err) => console.error(`Erro ao processar ${file}:`, err));

          // Criar imagem -blur
          const blurredImagePath = path.join(
            galleryPath,
            `${fileNameWithoutExtension}-blur.jpg`
          );
          sharp(filePath)
            .resize(20) // Tamanho reduzido para efeito de blur
            .blur(10)
            .toFile(blurredImagePath)
            .then(() => {
              console.log(`Gerado e sobrescrito: ${blurredImagePath}`);
            })
            .catch((err) => console.error(`Erro ao processar ${file}:`, err));
        }
      });
    }
  });
}

processImages();
