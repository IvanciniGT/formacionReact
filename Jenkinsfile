pipeline {

    agent any;
    
    stages {
    
        stage("Send 2 Sonar") {
            steps {
                echo 'Here we will send the project to sonar'
                // Some comands
                sh '''
                    #cd proyectos/aplicacion
                    ls 
                    cat sonar-project.properties
                    sonar-scanner --help
                    sonar-scanner -Dsonar.token=squ_be3fbeeab125fbcea3036312d290a29ade903a0e
                '''
                echo "Let's wait for sonar analysis"


            }
            agent {
                docker {
                    image "sonarsource/sonar-scanner-cli:latest"
                }
            }
        }
        stage("Wait 4 Sonar") {
            steps {
                echo "Let's wait for sonar analysis"
                // some more commands
                timeout(time: 1, unit: 'HOURS') {
                    // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
                    // true = set pipeline to UNSTABLE, false = don't
                    waitForQualityGate abortPipeline: true
                }
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
                echo 'Archive the Build'
                //archiveArtifacts artifacts: 'proyectos/aplicacion/build', followSymlinks: false
            }
            agent {
                docker {
                    image "node:latest"
                }
            }
        }
    
    }

}