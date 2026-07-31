# Applying Helm Chart

helm upgrade --install github-portfolio ./helm/github-portfolio \
  --namespace github-portfolio \
  --create-namespace \
  --values ./helm/github-portfolio/values.yaml

# Setting Secrets

helm upgrade --install github-portfolio ./helm/github-portfolio \
  --namespace github-portfolio \
  --set secret.viteGithubToken="your_actual_github_token_here"
