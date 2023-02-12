terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {}

resource "docker_image" "bookapi" {
  name         = "bookapi"
  keep_locally = true
}

resource "docker_container" "bookapi" {
  image = docker_image.bookapi.image_id
  name  = "bookapi"
  ports {
    internal = 3000
    external = 3000
  }
}
