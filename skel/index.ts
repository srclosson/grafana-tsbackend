import { BackendServer } from '@grafana/tsbackend';
import { GithubDiagnosticsService } from './DiagnosticsService';
import { GithubDataService } from './DataService';
import { GithubResourceService } from './ResourceService';

const app = new BackendServer();
app.addDiagnosticsService(new GithubDiagnosticsService());
app.addDataService(new GithubDataService());
app.addResourceService(new GithubResourceService());

module.exports = app;