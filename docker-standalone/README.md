### What is Docker ?

- Docker is a platform for developing, shipping, and running applications in
  isolated environments called container. It enables developers to package an
  application with all its dependencies (such as libraries, configurations, and
  runtimes) into a container, ensuring that it runs consistently on any
  environment. Docker provides the ability to package and run an application in
  a loosely isolated environment called a container

### What is Container ?

- Docker container is an isolated environments where an application and it's
  dependencies run. Containers are lightweight and contain everything needed to
  run the application, so you don't need to rely on what's installed on the host
  and you can share container while you work.
- A container is a runnable instance of an image. ou can create, create, stop,
  move, or delete a container using the Docker API or CLI. You can connect a
  container to one or more networks, attach storage to it, or even create a new
  image based on it's current state

### Advantages

- Fast, consistent delivery of your applications
- Responsive deployment and scaling
- Running more workload on the same hardware

### Docker Architecture

- Docker uses a client-server architecture. The Docker client talks to the
  Docker daemon, which does the heavy lifting of building, running, and
  distrubuting your Docker container. The Docker client and daemon can run on
  the same system, or you can connect a Docker client to a remote Docker daemon.
  The Docker client and daemon communicate using a RESTAPI, over UNIX sockets or
  a network interface. Another Docker client is Docker Compose, that lets you
  work with applications consisting of an set of container
  ![Docker architecture](https://docs.docker.com/get-started/images/docker-architecture.webp)

### What is Docker deamon (dockerd)?

- It listens for Docker API requests and manages Docker objects such as images,
  container, networks, and volumes. A daemon can also communicate with other
  daemons to manage Docker services.

### What is Docker client (docker)

- The Docker client (docker) is the primary way that many Docker users interact
  with Docker. When you use commands such as `Docker run`, the client sends
  these commands to `dockerd`, which carries them out. The `docker` command uses
  the Docker API. The Docker client can communicate with more than one daemon.

### What is Docker Images ?

- It's is a read-only template with instructions for creating a Docker
  container. Often, an image is based on another image, with some additional
  customization.

### Why we need Docker ?

- Docker resolves the common problem "It works on my machine" that often arises
  during development time by providing a consistent and isolated environment for
  applications to run in. This leads to several advantages, including:

* **Consistent & Isolated Environment**: Docker ensures that the environment in
  which an application runs is consistent across different machines and
  environments, eliminating the "It works on my machine" problem.
* **Rapid Application Deployment**: Docker enables rapid deployment of
  applications by allowing developers to package an application and its
  dependencies into a single container that can be easily deployed and run
  anywhere.
* **Ensures Scalability & Flexibility**: Docker containers are highly scalable
  and flexible, making it easy to scale applications up or down as needed, and
  to dynamically adjust resources allocated to each container.
* **Better Portability**: Docker containers are highly portable, allowing
  applications to be easily moved between environments, such as from development
  to production, without worrying about compatibility issues.
* **Cost-Effective**: Docker containers are cost-effective as they require fewer
  resources than traditional virtual machines, making them a more efficient use
  of hardware resources.
* **In-Built Version Control System**: Docker provides an in-built version
  control system, allowing developers to track changes to their applications and
  roll back to previous versions if needed.
* **Security**: Docker provides a secure environment for applications to run in,
  with features such as network isolation, resource constraints, and secure
  access controls.

### Docker Volume

Volumes are a mechanism for storing data outside containers. All volumes are
managed by Docker and stored in a dedicated directory on your host, usually
`/var/lib/docker/volumes for Linux systems`.

For more detail, when you mount a directory from your host machine to a
container using Docker, the container and the host share the **same physical**
location on the host machine for that directory. This means that any data
written to a folder inside the container will actually be written to a folder on
the host machine. This allows for data persistence even if the container is
deleted or recreated.

- Advantages

* **Easier Backup and Migration**: Volumes are easier to back up or migrate than
  bind mounts because they are managed by Docker and can be easily identified
  and manipulated using Docker CLI commands or the Docker API.
* **Cross-Platform Compatibility**: Volumes work on both Linux and Windows
  containers, making them a versatile solution for data storage.
* **Simplified Multi-Container Sharing**: Volumes can be more safely shared
  among multiple containers, allowing for efficient data exchange between
  containers.
* **Customizable Storage**: Volumes drivers let you store volumes on remote
  hosts or cloud providers, encrypt the contents of volumes, or add other
  functionality to meet specific storage needs.
* **Pre-Population and High Performance**: New volumes can have their content
  pre-populated by a container, and volumes on Docker Desktop have much higher
  performance than bind mounts from Mac and Windows hosts, making them suitable
  for demanding applications.

### Docker network

### Virtual Machine vs Docker ?

### Docker cheetsheet

### Docker in CI/CD

### Additional Knowledge (metioned above)

### The underlying technology

Docker is written in the Go programming language and takes advantage of several
features of the Linux kernel to deliver its functionality. Docker uses a
technology called namespaces to provide the isolated workspace called the
container. When you run a container, Docker creates a set of namespaces for that
container.

These namespaces provide a layer of isolation. Each aspect of a container runs
in a separate namespace and its access is limited to that namespace.

#### hypervisor ?

#### daemon ?

#### systemd ?

#### containerd ?

#### runc ?

```
```
