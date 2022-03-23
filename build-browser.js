const fs = require("fs")

fs.writeFileSync("prism-hyperscript.js",
    fs.readFileSync("prism-hyperscript.mjs", "utf-8")
        .replace("export default",
        `(prismHyperscript => {
            this.module && this.module.exports = prismHyperscript
            this.Prism && prismHyperscript(this.Prism)
        })`
    ))
