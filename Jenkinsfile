pipeline{
 agent any
  stages{
     stage("run Frontend"){
       steps{
           echo "Executing Yarn"
           nodejs("Node JS 20.8.1"){
            sh "yarn install"
           }
       }
     }
 stage("Run Backend"){
       steps{
         echo "Executing Gradle"
        withGradle(){
         sh "./gradlew -v"
        }
       }
     }

  }
}
