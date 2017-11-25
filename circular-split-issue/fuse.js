const { FuseBox, WebIndexPlugin, QuantumPlugin } = require("fuse-box");
const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  target: "browser",
  plugins: [
    WebIndexPlugin(),
    QuantumPlugin({
      treeshake: false,
      uglify: false
    })
  ]
});
fuse.dev();

fuse
  .bundle("app")
  .watch()
  .hmr()
  .instructions(" > index.ts");
fuse.run();
