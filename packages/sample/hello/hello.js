function main(args) {
    let name = args.name || 'Karl'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
