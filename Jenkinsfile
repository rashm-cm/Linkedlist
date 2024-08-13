pipeline {
    agent any
  triggers{
    githubPush()}
 
    environment {
        git = 'https://github.com/rashm-cm/Linkedlist.git'
        Branch = 'main' 
    }
 
    stages {
        stage('Clone Repository') {
            steps {
                git url: "${env.git}", branch: "${env.Branch}"
            }
        }
 
        stage('Run JavaScript File') {
            steps {
                bat 'node LinkedList.js'
            }
        }
    }
 
    post {
        always {
            echo 'Pipeline completed'
        }
    }
}
