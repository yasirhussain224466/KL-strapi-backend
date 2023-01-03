module.exports = {
         apps: [
                      {
                                    name: 'development-app',
                                    script: './server.js',
                                    instances : "max",
                                    exec_mode : "cluster",
                                    env: {
                                                    NODE_ENV: 'development',
                                                    PORT: 8081
                                                  }
                                  }
	 ]
};

