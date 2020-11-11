const WebFontBuilder = require('./webFontBuilder');
const path = require("path");
const fs = require("fs");

const fontCssOutFile = "../../css/font.css";
const fontsOutDir = "../../fonts/";
const scssOutFile = "../platform/icon_font_maps/0_font_maps.scss";

const writeToFile = (fileName, content) => {
    const writePath = path.resolve(__dirname, fileName);
    fs.writeFileSync(writePath, content);
};

let fontCssFileContents = "";
let scssMapFileContents = "";

const buildFont = (fontName, relativeSvgPath, scssMapName, descent, cssClassName, modifier) => {
    if (!cssClassName) {
        throw new Error("cssClassName required for buildFont");
    }
    const includedSvgs = [];
    const svgDir = path.resolve(__dirname, relativeSvgPath);
    modifier = modifier || "";

    if (!fs.existsSync(svgDir)) {
        //console.debug("Directory for font " + fontName + " not found: " + svgDir);
        return;
    }

    fs.readdirSync(svgDir).forEach((fileName) => {
        if (fileName.indexOf(".svg") > -1) {
            includedSvgs.push(path.resolve(svgDir, fileName));
        }
    });

    if (includedSvgs.length === 0) {
        console.debug("No svgs found for font " + fontName + ", looked in " + svgDir);
        return;
    }

    const glyphMappings = {};

    const templateCssPath = path.resolve(__dirname, 'gwTemplate.css');
    console.warn(templateCssPath);

    return WebFontBuilder.makeFont({
        files: includedSvgs.sort(),
        normalize: true,
        fontName: fontName,
        formats: ['woff', 'woff2'],
        template: templateCssPath,
        cssClassName: cssClassName,
        glyphTransformFn: (glyph) => {
            glyph.modifier = modifier;
            const glyphUnicode = glyph.unicode;
            if (glyphUnicode === undefined || glyphUnicode === null || glyphUnicode.length === 0) {
                throw new Error("Unable to locate unicode value");
            }

            const glyphUnicodeIndex0 = glyphUnicode[0];
            if (glyphUnicodeIndex0 === undefined || glyphUnicodeIndex0 === null || glyphUnicodeIndex0.length === 0) {
                throw new Error("Unable to locate unicode index value");
            }

            const charCodeAt0 = glyphUnicodeIndex0.charCodeAt(0);
            if (charCodeAt0 === undefined || charCodeAt0 === null || charCodeAt0.length === 0) {
                throw new Error("Unable to locate unicode value");
            }

            const stringValue = charCodeAt0.toString(16);
            if (stringValue === undefined || stringValue === null || stringValue.length === 0) {
                throw new Error("Unable to locate unicode value");
            }
            glyphMappings[glyph.name + modifier] = stringValue;
            return glyph;
        },
        descent: descent
    }).then((result) => {
        if (result.woff) {
            writeToFile(fontsOutDir + fontName + ".woff", result.woff);
        }
        if (result.woff2) {
            writeToFile(fontsOutDir + fontName + ".woff2", result.woff2);
        }
        console.warn(Object.keys(result));
        //console.warn(result.config);

        addScssMappings(glyphMappings, scssMapName, modifier);
        fontCssFileContents += "\n\n" + result.template;
    }).catch((err) => {
        console.error(err)
    });
};

const addScssMappings = (glyphMappings, scssMapName) => {
    scssMapFileContents += scssMapName + ": (";
    const keys = Object.keys(glyphMappings);
    keys.forEach((glyphName, index) => {
        scssMapFileContents += "\n    \"" + glyphName + "\": \"\\" + glyphMappings[glyphName] + "\"";
        if (index < (keys.length - 1)) {
            scssMapFileContents += ",";
        }
    });
    scssMapFileContents += "\n);\n"
};

const promises = [];

//Guidewire's internal font
promises.push(buildFont("gw-font", "svg/gw", '$gw-svg-font-map', 64, "gw-svg-icon"));

//Font Awesome 5 - each generates its own font file (first arg), but shares a CSS class (second to last arg). Modifiers
//are added for the special fonts (-sold, -light, last arg).
promises.push(buildFont("fa-brands", "svg/fa5/brands", '$gw-font-awesome-5-brands-map', 64, "gw-fa5-icon"));
promises.push(buildFont("fa-regular", "svg/fa5/regular", '$gw-font-awesome-5-map', 64, "gw-fa5-icon"));
promises.push(buildFont("fa-solid", "svg/fa5/solid", '$gw-font-awesome-5-solid-map', 64, "gw-fa5-icon", "-solid"));
promises.push(buildFont("fa-light", "svg/fa5/light", '$gw-font-awesome-5-light-map', 64, "gw-fa5-icon", "-light"));

//Adds a customer font set, using custom SVGs:
promises.push(buildFont("customer-font", "svg/customer", "$gw-font-customer-map", 0, "gw-customer-font-icon"));

Promise.all(promises).then(() => {
    //Output final results
    writeToFile(fontCssOutFile, fontCssFileContents);
    writeToFile(scssOutFile, scssMapFileContents);
});
