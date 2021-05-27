sonar-scanner \
  -Dsonar.projectKey=jest-test \
  -Dsonar.sources=./src/Calculator.ts \
  -Dsonar.test.inclusions=./src/__tests__/Calculator.test.ts \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=2ee8e3f78a7772fba087e1fa855bf3314a609547 \
  -Dsonar.testExecutionReportPaths=sonar-report.xml
