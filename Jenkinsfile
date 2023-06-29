pipeline {

    agent any;
    
    stages {
    
        stage("Sonar") {
            steps {
                echo 'Here we will send the project to sonar'
                // Some comands
                echo "Let's wait for sonar analysis"
                // some more commands
            }
        }
    
        stage("Build") {
            steps {
                echo 'Here we start to build the react project'
                echo 'Here build the react project'
                sh '''
                    cd proyectos/aplicacion
                    npm install
                    npm run build
                '''
                echo 'The build is completed'
            }
            agent {
                docker {
                    image "node:latest"
                }
            }
        }
    
    }

}