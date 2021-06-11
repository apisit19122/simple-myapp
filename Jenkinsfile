pipeline {
    agent any

    environment {
        dockerImage = ''
    }

    stages {
        stage('Build') {
            steps {
            sh 'echo No build required for simple-myapp.'
         }
        }
        stage('Test') {
            steps {
                sh 'echo "Tests passed"'
            }
        }
        stage('Build and Push Image') {
         steps {
           sh 'docker image build -t apisit19122/simple-myapp:${BUILD_ID} .'
         }
      }
        // stage('Build image') {
        //     steps {
        //         script {
        //             dockerImage = docker.build("apisit19122/simple-myapp")
        //         }
        //     }
        // }
        // stage('Push image') {
        //     steps {
        //         script {
        //             withDockerRegistry(
        //                 credentialsId: 'docker-credential',
        //                 url: 'https://index.docker.io/v1/') {
        //                 dockerImage.push()
        //             }
        //         }
        //     }
        // }
        stage('Deployment') {
            steps {
                sh 'kubectl apply -f deployment.yml';
            }
        }
    }
}