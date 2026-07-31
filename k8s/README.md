# Applying Kubernetes Secrets

kubectl create secret generic github-token \
    --from-literal=VITE_GITHUB_TOKEN="xxxxxxxxxxxxxxxx" \
    --namespace github-portfolio


# Updating Secrets to Helm

helm upgrade --install github-portfolio ./helm/github-portfolio --namespace github-portfolio
