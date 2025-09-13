pipeline {
  agent any

  stages {
    stage('Build and Deploy') {
      steps {
        sh 'echo "Hello from EMS UI."'
        sh 'npm i'
        sh 'npm run build'
        sh 'rm -rf /home/shirasao-ems/htdocs/ems.shirasao.com/*'
        sh 'cp -r /root/.jenkins/workspace/ems.shirasao.com/dist/UI/browser/* /home/shirasao-ems/htdocs/ems.shirasao.com/'
      }
    }   
  }
}