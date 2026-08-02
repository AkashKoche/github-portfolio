{{/*
Expand the name of the chart.
*/}}
{{- define "github-portfolio.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end }}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "github-portfolio.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name (include "github-portfolio.name" .) | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end }}

{{/*
Chart name and version.
*/}}
{{- define "github-portfolio.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" -}}
{{- end }}
{{/*
Common labels
*/}}
{{- define "github-portfolio.labels" -}}
helm.sh/chart: {{ include "github-portfolio.chart" . }}
{{ include "github-portfolio.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "github-portfolio.selectorLabels" -}}
app.kubernetes.io/name: {{ include "github-portfolio.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}
