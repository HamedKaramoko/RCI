// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { GroupService } from './group.service';
import { Group } from '../model/group';

describe('GroupService', () => {

	let httpClient: HttpClient;
  	let httpTestingController: HttpTestingController;

	let groupService: GroupService
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [GroupService]
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
		const group: Group = {
			id: 1,
			name: 'ROLE_USER'
		}
		// Make an HTTP GET request
		httpClient.get<Group>("/RCI/group").subscribe(data =>
		  // When observable resolves, result should match test data
		  expect(data).toEqual(group)
		);

		// The following `expectOne()` will match the request's URL.
		// If no requests or multiple requests matched that URL
		// `expectOne()` would throw.
		let req = httpTestingController.expectOne('/RCI/group');

		/*req = httpTestingController.expectOne(
			req => req.headers.has('Authorization')
		)*/

		// Assert that the request is a GET.
		expect(req.request.method).toEqual('GET');

		// Respond with mock data, causing Observable to resolve.
		// Subscribe callback asserts that correct data was returned.
		req.flush(group);
	});
});
