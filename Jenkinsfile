pipeline {
    agent {
        docker {
            image 'node:8'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('CheckNodeVersion') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
