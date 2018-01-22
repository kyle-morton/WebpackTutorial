class ExamplePlugin {
    apply(compiler) {
        compiler.plugin("run", (compiler, callback) => {
            console.log('WEBPACK JS RUNNING');
            callback();
        });
    }
}

module.exports = ExamplePlugin;