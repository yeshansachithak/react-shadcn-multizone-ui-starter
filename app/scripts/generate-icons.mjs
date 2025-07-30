// generate-icons.mjs
import favicons from "favicons";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const source = "src/assets/UnifyIT-logo.svg";

const configuration = {
    path: "/", // Path for overriding default icons path
    appName: "UnifyIT",
    appShortName: "UnifyIT",
    appDescription: "AI-powered Multizone UI Interface",
    developerName: "Unify IT Solutions",
    background: "#ffffff",
    theme_color: "#0ea5e9",
    display: "standalone",
    start_url: "/",
    icons: {
        android: true,
        appleIcon: true,
        favicons: true,
        windows: false,
        yandex: false,
    },
};

const outputPath = "./public";

const { images, files } = await favicons(source, configuration);

await mkdir(outputPath, { recursive: true });

await Promise.all([
    ...images.map((image) =>
        writeFile(path.join(outputPath, image.name), image.contents)
    ),
    ...files.map((file) =>
        writeFile(path.join(outputPath, file.name), file.contents)
    ),
]);

console.log("✅ All icons and manifest generated in /public");
