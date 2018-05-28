import { TestBed, inject } from '@angular/core/testing';

import { PersonService } from './person.service';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Person } from '../model/person';
import { Gender } from '../model/gender';

describe('PersonService', () => {

	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	let personService: PersonService
	const apiUrl: string = '/RCI/person';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [PersonService]
		});
		// Inject the http service and test controller for each test
		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	afterEach(() => {
		// After every test, assert that there are no more pending requests.
		httpTestingController.verify();
	});

	it('should test all Http requests', () => {
		const person: Person = {
			id: 1,
			login: 'hamed',
			email: 'a@b.c',
			gender: Gender.M,
			password: "",
			firstname: 'Hamed',
			surname: 'KARAMOKO'
		}
		// Make an HTTP GET request
		httpClient.get<Person>(apiUrl).subscribe(data =>
		  // When observable resolves, result should match test data
		  expect(data).toEqual(person)
		);

		// The following `expectOne()` will match the request's URL.
		// If no requests or multiple requests matched that URL
		// `expectOne()` would throw.
		let req = httpTestingController.expectOne(apiUrl);

		/*req = httpTestingController.expectOne(
			req => req.headers.has('Authorization')
		)*/

		// Assert that the request is a GET.
		expect(req.request.method).toEqual('GET');

		// Respond with mock data, causing Observable to resolve.
		// Subscribe callback asserts that correct data was returned.
		req.flush(person);
	});
});
