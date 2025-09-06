pipeline {
  agent any

  stages {
    stage('Build and Deploy') {
      steps {
        sh 'npm i'
        sh 'ng build --no-interactive'
        sh 'rm -rf /home/shirasao-ems/htdocs/ems.shirasao.com/*'
        sh 'cp -r /root/.jenkins/workspace/ems.shirasao.com/dist/* /home/shirasao-ems/htdocs/ems.shirasao.com/'
      }
    }   
  }
}