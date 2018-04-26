node {
  def app

  stage('Clone repository') {
    /* Let's clone repository to our workspace */
    checkout scm
  }

  stage('Build image') {
    /* This builds the image, similar to docker build command line */
    app = docker.build("hellonode")
  }

  stage('Test image') {
    /* We would run a test framework for our image */
    app.inside {
	sh 'echo "Test"'
    }
  }

  stage('Push image') {
    /* We will push the image with two tags:
     * First, the increment build number from Jenkins
     * Second, the 'latest' tag
     * Pushing multiple tags is cheap as all the layers are reused */
    docker.withRegistry("https://registry.hub.docker.com", 'docker-hub-credentials') {
	app.push("${env.BUILD_NUMBER}")
	app.push("latest")
    }
  }
}
