const AppMath = require('./appMath');

function main() {
    console.log(new AppMath().sum(1, 2));
}

if (require.main === module) {
    main();
}

module.exports = { main };