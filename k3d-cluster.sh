k3d cluster create github-portfolio \
	--servers 1 \
	--agents 2 \
	--port "80:80@loadbalancer" \
	--k3s-arg "--disable=traefik@server:0"
