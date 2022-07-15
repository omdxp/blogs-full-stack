module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic",
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            utils: "./src/utils",
            assets: "./src/assets",
            config: "./src/config",
            constants: "./src/constants",
            hooks: "./src/hooks",
            services: "./src/services",
            models: "./src/models",
            styles: "./src/styles",
            fonts: "./src/fonts",
            store: "./src/store",
            models: "./src/models",
            "test-data": "./src/test-data",
          },
        },
      ],
      [
        "babel-plugin-inline-import",
        {
          extensions: [".svg"],
        },
      ],
    ],
  };
};
