pipeline {
  agent any

  stages {
    stage('Build and Deploy') {
      steps {
        sh 'echo "Hello from EMS UI."'
        sh 'npm i'
        sh 'ng build'
        sh 'rm -rf /home/shirasao-ems/htdocs/ems.shirasao.com/*'
        sh 'cp -r /root/.jenkins/workspace/ems.shirasao.com/dist/* /home/shirasao-ems/htdocs/ems.shirasao.com/'
      }
    }   
  }
}