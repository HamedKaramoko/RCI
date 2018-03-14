import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';

export class InMemoryDataService implements InMemoryDbService {

	createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}>{
		const persons = [

		];
		return {};
	}

}
