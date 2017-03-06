process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {

    const input = process.stdin.read();

    if (input != null) {

        console.log(typeof input);

        const command = input; //.toString().trim();

        if (command === 'exit') {
            process.exit();
        }

        const commandBuffer = Buffer.from(command);

        process.stdout.write(input);
        process.stdout.write(JSON.stringify(commandBuffer));
        process.stdout.write(commandBuffer.toString());
    }

    const prompt = '\nEnter Command> ';
    process.stdout.write(prompt);

});