
soda.module({
    'name'    : 'presley',
    'depends' : ['node:sys', 'node:http'],
    'code'    : function (sys, http) {
        var ns = {};

        var Server = function (envs) {
            this.envs = envs;
        };

        Server.prototype.addHandler = function (handler) {
            sys.debug(sys.inspect(handler));
        };

        Server.prototype.run = function (argv, env) {
            var envName     = argv[2] || 'dev',
                environment = this.envs[envName],
                listen      = environment.listen.match(/^(?:(\S+)\:)?(\d+)$/);
            listen = [listen[2], listen[1]];
            if (! listen[1]) listen.length = 1;
            this.nodeServer = http.createServer(function (request, response) {
                response.sendHeader(200, {"Content-Type": "text/plain"});
                response.sendBody("Hello World\n");
                response.finish();
            });
            this.nodeServer.listen.apply(this.nodeServer, listen);
        };

        var Controller = function (opts) {
            
        };

        Controller.prototype.getPublicTemplates = function () {

        };

        ns.server = function (envs) { return new Server(envs); };

        ns.controller = function (opts) { return new Controller(); };

        return ns;
    }
});



