
soda.module({
    name    : 'presley_cli',
    depends : ['node:sys'],
    code    : function (sys) {
        var ns = {};

        var commands = {
            'create' : function (argv) {

            },
            'help' : function (argv) {
                sys.puts('-- Presley Help --');
                sys.puts('\n');
                sys.puts('Usage:');
                sys.puts('    presley COMMAND [ ARGS ]');
                sys.puts('\n');
                sys.puts('Commands:');
                sys.puts('    create PROJECTNAME   - create a new project');
                sys.puts('    help                 - display this message');
                sys.puts('\n');
            }
        };

        ns.execute = function (argv, env) {
            argv.shift(); // node
            argv.shift(); // presley
            var command = argv.shift();
            if (commands[command]) {
                commands[command](argv);
            }
            else {
                commands.help(argv);
            }
        };

        return ns;
    }
});
